define(function (require, exports, module) {

    'use strict';

    var CodeHintManager = brackets.getModule('editor/CodeHintManager');
    var TokenUtils = brackets.getModule('utils/TokenUtils');
    var ExtensionUtils = brackets.getModule('utils/ExtensionUtils');
    var NodeDomain = brackets.getModule('utils/NodeDomain');
    var FileSystem = brackets.getModule('filesystem/FileSystem');

    var hintsFromNode = new NodeDomain('fetch', ExtensionUtils.getModulePath(module, 'node/UI5HintsDomain'));
    var deferred = undefined;
    var hintsJSON = {};


    function createObjectInfo(token, offset) {
        console.log(token);
        hintsFromNode.exec('returnHints', token)
            .done(function (hints) {
                console.log(hints);
                if (hints === undefined) {
                    var interval = setInterval(function () {
                        var returned = function (err, data) {
                            if (data !== undefined) {
                                console.log(data);
                                clearInterval(interval);

                                data = JSON.parse(data.toString());

                                hints = [];

                                for (var count = 0; count < data.length; count++) {
                                    if (data[count].longname.length >= token.length && data[count].longname.substring(0, token.length) === token) {
                                        var hintString = data[count].longname;
                                        if (data[count].params !== undefined) {
                                            for (var paramCount = 0; paramCount < data[count].params.length; paramCount++) {
                                                hintString = hintString + data[count].params[paramCount].name + ',';
                                            }
                                        }
                                        hintString = hintString.slice(0, -1);
                                        hints.push({
                                            hint: hintString
                                        });
                                    }
                                }

                                var list = [];
                                for (var count = 0; count < hints.length; count++) {
                                    list.push(hints[count].hint);
                                }

                                var match = '';
                                if (hints.length > 0)
                                    match = hints[0].hint;

                                hintsJSON = {
                                    objectName: match,
                                    position: {
                                        offset: offset
                                    },
                                    objectSuggestions: list,
                                    original: token
                                };

                                var query = hintsJSON.objectName.slice(0, hintsJSON.position.offset);
                                var results = hintsJSON.objectSuggestions;

                                deferred.resolve({
                                    hints: results,
                                    match: query,
                                    selectInitial: true,
                                    handleWideResults: false
                                });
                            }
                        };
                        FileSystem.getFileForPath('C:/Users/i076326/AppData/Roaming/Brackets/extensions/user/brackets-openui5/node/output.json').read({}, returned);
                    }, 10);
                } else {

                    hints = JSON.parse(hints);

                    var list = [];
                    for (var count = 0; count < hints.length; count++) {
                        list.push(hints[count].hint);
                    }

                    var match = '';
                    if (hints.length > 0)
                        match = hints[0].hint;

                    hintsJSON = {
                        objectName: match,
                        position: {
                            offset: offset
                        },
                        objectSuggestions: list,
                        original: token
                    };

                    var query = hintsJSON.objectName.slice(0, hintsJSON.position.offset);
                    var results = hintsJSON.objectSuggestions;

                    deferred.resolve({
                        hints: results,
                        match: query,
                        selectInitial: true,
                        handleWideResults: false
                    });
                }
            })
            .fail(function (err) {
                console.log(err);
            });
    }


    function getObjectInfo(editor, pos) {
        var ctx = TokenUtils.getInitialContext(editor._codeMirror, pos);
        console.log(pos);
        console.log(TokenUtils.getInitialContext(editor._codeMirror, pos));
        var offset = TokenUtils.offsetInToken(ctx);

        return createObjectInfo(ctx.token.state.lineSeen, offset);
    };

    function UI5Hints() {}

    UI5Hints.prototype._getCodeHintList = function () {
        console.log(sessionProvider);
        return hintList();
    };

    /**
     * Determines whether HTML tag hints are available in the current editor
     * context.
     *
     * @param {Editor} editor
     * A non-null editor object for the active window.
     *
     * @param {string} implicitChar
     * Either null, if the hinting request was explicit, or a single character
     * that represents the last insertion and that indicates an implicit
     * hinting request.
     *
     * @return {boolean}
     * Determines whether the current provider is able to provide hints for
     * the given editor context and, in case implicitChar is non- null,
     * whether it is appropriate to do so.
     */
    UI5Hints.prototype.hasHints = function (editor, implicitChar) {
        var pos = editor.getCursorPos();

        getObjectInfo(editor, pos);
        this.editor = editor;

        return true;
    };

    /**
     * Returns a list of availble HTML tag hints if possible for the current
     * editor context.
     *
     * @return {jQuery.Deferred|{
     *        hints: Array.<string|jQueryObject>,
     *        match: string,
     *        selectInitial: boolean,
     *        handleWideResults: boolean}}
     * Null if the provider wishes to end the hinting session. Otherwise, a
     * response object that provides:
     * 1. a sorted array hints that consists of strings
     * 2. a string match that is used by the manager to emphasize matching
     *  substrings when rendering the hint list
     * 3. a boolean that indicates whether the first result, if one exists,
     *  should be selected by default in the hint list window.
     * 4. handleWideResults, a boolean (or undefined) that indicates whether
     *  to allow result string to stretch width of display.
     */
    UI5Hints.prototype.getHints = function (implicitChar) {
        deferred = $.Deferred();
        getObjectInfo(this.editor, this.editor.getCursorPos());

        return deferred;
    };
    /**
     * Inserts a given HTML tag hint into the current editor context.
     *
     * @param {string} hint
     * The hint to be inserted into the editor context.
     *
     * @return {boolean}
     * Indicates whether the manager should follow hint insertion with an
     * additional explicit hint request.
     */
    UI5Hints.prototype.insertHint = function (completion) {
        var start = {
            line: -1,
            ch: -1
        };
        var end = {
            line: -1,
            ch: -1
        };

        var cursor = this.editor.getCursorPos();
        var charCount = 0;

        var textAfterCursor = hintsJSON.objectName.substr(hintsJSON.position.offset);
        charCount = hintsJSON.objectName.length;

        end.line = start.line = cursor.line;
        start.ch = cursor.ch - hintsJSON.position.offset;
        end.ch = start.ch + charCount;

        if (completion !== hintsJSON.original) {
            if (start.ch !== end.ch) {
                this.editor.document.replaceRange(completion, start, end);
            } else {
                this.editor.document.replaceRange(completion, start);
            }
        }
        return false;
    };

    var ui5Hints = new UI5Hints();
    CodeHintManager.registerHintProvider(ui5Hints, ['javascript'], 0);

});