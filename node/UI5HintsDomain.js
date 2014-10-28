(function () {
    'use strict';

    var jsdoc_parse = require('jsdoc-parse');
    var fs = require('fs');

    function getHints(token) {
        var inputs = token.split('.');

        if (inputs.length === 1)
            inputs.push(' ');
        else if (token[token.length - 1] !== '.')
            inputs.push(' ');
        else
            inputs.push('');

        fs.writeFileSync('C:/Users/i076326/AppData/Roaming/Brackets/extensions/user/brackets-openui5/node/check.txt', '1');


        var files = fs.readdirSync('C:/Users/i076326/AppData/Roaming/Brackets/extensions/user/brackets-openui5/node/sapui5/');

        fs.writeFileSync('C:/Users/i076326/AppData/Roaming/Brackets/extensions/user/brackets-openui5/node/check.txt', files[0]);

        var inputStr = '';
        var response = [];
        var oldResponse = [];
        for (var count = 0; count < inputs.length - 1; count++) {

            if (response.length > 0)
                oldResponse = response;
            response = [];

            for (var countFiles = 0; countFiles < files.length; countFiles++) {
                if (files[countFiles].slice(0, -3) == inputStr) {
                    response.push({
                        hint: files[countFiles].slice(0, -3)
                    });
                }
            }
            if (count > 0)
                inputStr = inputStr + '.';
            inputStr = inputStr + inputs[count];
        }
        fs.writeFileSync('C:/Users/i076326/AppData/Roaming/Brackets/extensions/user/brackets-openui5/node/check.txt', inputStr);

        if (inputs[count] == ' ') {
            for (var countFiles = 0; countFiles < files.length; countFiles++) {
                if (files[countFiles].length >= inputStr.length && files[countFiles].substring(0, inputStr.length) == inputStr)
                    oldResponse.push({
                        hint: files[countFiles].slice(0, -3)
                    });
            }
        } else {
            for (var countFiles = 0; countFiles < files.length; countFiles++) {
                if (files[countFiles].slice(0, -2) == inputStr)
                    oldResponse.push({
                        hint: files[countFiles].slice(0, -3)
                    });
            }
        }
        if (oldResponse.length == 1) {
            fs.writeFileSync('C:/Users/i076326/AppData/Roaming/Brackets/extensions/user/brackets-openui5/node/check.txt', 'C:/Users/i076326/AppData/Roaming/Brackets/extensions/user/brackets-openui5/node/sapui5/' + oldResponse[0].hint + '.js');
            var writable = fs.createWriteStream('C:/Users/i076326/AppData/Roaming/Brackets/extensions/user/brackets-openui5/node/output.json');
            var fileName = oldResponse[0].hint;

            var output = jsdoc_parse('C:/Users/i076326/AppData/Roaming/Brackets/extensions/user/brackets-openui5/node/sapui5/' + fileName + '.js').pipe(writable);

            var interval = setInterval(function () {
                var data = fs.readFileSync('C:/Users/i076326/AppData/Roaming/Brackets/extensions/user/brackets-openui5/node/output.json');
                fs.writeFileSync('C:/Users/i076326/AppData/Roaming/Brackets/extensions/user/brackets-openui5/node/check.txt', data.toString());
                if (data.toString() != '') {
                    clearInterval(interval);
                    data = JSON.parse(data.toString());

                    var hints = [];

                    for (var count = 0; count < data.length; count++) {
                        if (data[count].longname.length >= inputStr.length && data[count].longname.substring(0, inputStr.length) === inputStr) {
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

                    return (hints.toString());
                }
            }, 10);
        } else if (oldResponse.length === 0) {
            oldResponse.push({
                hint: 'No Hint'
            });
            return JSON.stringify(oldResponse);
        } else {
            return JSON.stringify(oldResponse);
        }
    }

    function init(domainManager) {
        if (!domainManager.hasDomain('fetch')) {
            domainManager.registerDomain('fetch', {
                major: 0,
                minor: 1
            });
        }

        domainManager.registerCommand(
            'fetch',
            'returnHints',
            getHints,
            false,
            "Returns the code hints for a particular token", [{
                name: 'token',
                type: 'string',
                description: 'token using which hints will be generated'
            }], [{
                name: 'hints',
                type: 'string',
                description: 'Code Hints'
            }]
        );
    }

    exports.init = init;
}());