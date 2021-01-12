function hideSun() {
    document.getElementById('theme-sun').style.display = "none";
    document.getElementById('theme-moon').style.display = "";
    document.getElementById('menuIcon').src = "micons/menu.svg";
}

function hideMoon() {
    document.getElementById('theme-sun').style.display = "";
    document.getElementById('theme-moon').style.display = "none";
    document.getElementById('menuIcon').src = "micons/lmenu.svg";
}
var codeView = document.getElementById("codeView");
// codeView.style.height = "100vh";
var myCodeMirror = CodeMirror(codeView, {
    value: 'class Person:\n\tdef __init__(self, name, age):\n\t\tself.name = name\n\t\tself.age = age\n\n\tdef myfunc(self):\n\t\tprint("Hello my name is " + self.name)\n\np1 = Person("John", 36)\np1.myfunc()',
    mode: "python",
    indentUnit: 4,
    indentWithTabs: true,
    autocorrect: true,
    cursorBlinkRate: 250,
    styleActiveLine: false,
    matchBrackets: true,
    theme: "seti",
    autoCloseBrackets: true,
    lineWrapping: true,
    extraKeys: {
        "Ctrl-Q": function (cm) {
            cm.foldCode(cm.getCursor());
        }
    },
    lineNumbers: true,
    foldGutter: false,
    autoCloseTags: true,
    highlightSelectionMatches: {
        showToken: /\w/,
        annotateScrollbar: false
    },
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
    // gutters: ["CodeMirror-linenumbers"]
});

function changeLanguageMode(lang){
    if (lang == "java") {lang = "text/x-java"}
    else if (lang == "c") {lang = "text/x-csrc"}
    else if (lang == "cpp") {lang = "text/x-c++src"}
    else if (lang == "kotlin") {lang = "text/x-kotlin"}
    else if (lang == "scala") {lang = "text/x-csrc"}
    else if (lang == "ceylon") {lang = "text/x-ceylon"}
    else if (lang == "objective-c") {lang = "text/x-objectivec"}
    myCodeMirror.setOption("mode",lang);
}

function toggleLineNumbers(ib) {
    if (!ib.checked) {
        myCodeMirror.setOption("lineNumbers", false);
    } else {
        myCodeMirror.setOption("lineNumbers", true);

    }
}

function toggleHMW(ib) {
    if (!ib.checked) {
        myCodeMirror.setOption("highlightSelectionMatches", false);
    } else {
        myCodeMirror.setOption("highlightSelectionMatches", {
            showToken: /\w/,
            annotateScrollbar: false
        });

    }
}


function toggleHMB(ib) {
    if (!ib.checked) {
        myCodeMirror.setOption("matchBrackets", false);
    } else {
        myCodeMirror.setOption("matchBrackets", true);

    }
}

function toggleLW(ib) {
    if (!ib.checked) {
        myCodeMirror.setOption("lineWrapping", false);
    } else {
        myCodeMirror.setOption("lineWrapping", true);

    }
}

function toggleFIG(ib) {
    if (!ib.checked) {
        myCodeMirror.setOption("foldGutter", false);
    } else {
        myCodeMirror.setOption("foldGutter", true);

    }
}


function toggleActiveLineFocus(ib) {
    if (!ib.checked) {
        myCodeMirror.setOption("styleActiveLine", false);
    } else {
        myCodeMirror.setOption("styleActiveLine", true);

    }
}

function toggleACB(ib) {
    if (!ib.checked) {
        myCodeMirror.setOption("autoCloseBrackets", false);
    } else {
        myCodeMirror.setOption("autoCloseBrackets", true);

    }
}

function toggleBOR(ib) {
    if (ib.checked) {
        document.getElementById("buttons-right").style.visibility = "visible";
        document.getElementById("buttons-left").style.visibility = "hidden";
    } else {
        document.getElementById("buttons-right").style.visibility = "hidden";
        document.getElementById("buttons-left").style.visibility = "visible";
    }
}


var inputLang = document.getElementById("selectLang");
function selectLanguage() {
    var theme = inputLang.options[inputLang.selectedIndex].textContent;
    myCodeMirror.setOption("mode", theme);
}


var input = document.getElementById("select");
function selectTheme() {
    var theme = input.options[input.selectedIndex].textContent;
    myCodeMirror.setOption("theme", theme);
    let titleBarTint = "#0000";
    let lightTitleBar = false;
    if (theme == "yonce") {
        titleBarTint = "#1c1c1c";
    } else if (theme == "seti") {
        titleBarTint = "#151718";
    } else if (theme == "3024-day") {
        titleBarTint = "#F7F7F7";
        lightTitleBar = true;
    } else if (theme == "3024-night") {
        titleBarTint = "#090300";
    } else if (theme == "abcdef") {
        titleBarTint = "#0F0F0F";
    } else if (theme == "ambiance") {
        titleBarTint = "#161616";
    } else if (theme == "ayu-dark") {
        titleBarTint = "#0A0E14";
    } else if (theme == "ayu-mirage") {
        titleBarTint = "#1F2430";
    } else if (theme == "base16-dark") {
        titleBarTint = "#151515";
    } else if (theme == "base16-light") {
        lightTitleBar = true;
        titleBarTint = "#F5F5F5";
    } else if (theme == "bespin") {
        titleBarTint = "#28211C";
    } else if (theme == "blackboard") {
        titleBarTint = "#0C1021";
    } else if (theme == "cobalt") {
        titleBarTint = "#002240";
    } else if (theme == "colorforth") {
        titleBarTint = "#000000";
    } else if (theme == "darcula") {
        titleBarTint = "#2B2B2B";
    } else if (theme == "dracula") {
        titleBarTint = "#282A36";
    } else if (theme == "duotone-dark") {
        titleBarTint = "#2A2734";
    } else if (theme == "duotone-light") {
        lightTitleBar = true;
        titleBarTint = "#FAF8F5";
    } else if (theme == "eclipse") {
        lightTitleBar = true;
        titleBarTint = "#FFFFFF";
    } else if (theme == "elegant") {
        lightTitleBar = true;
        titleBarTint = "#FFFFFF";
    } else if (theme == "erlang-dark") {
        titleBarTint = "#002240";
    } else if (theme == "gruvbox-dark") {
        titleBarTint = "#282828";
    } else if (theme == "hopscotch") {
        titleBarTint = "#322931";
    } else if (theme == "icecoder") {
        titleBarTint = "#1D1D1B";
    } else if (theme == "idea") {
        lightTitleBar = true;
        titleBarTint = "#FFFFFF";
    } else if (theme == "isotope") {
        titleBarTint = "#000000";
    } else if (theme == "lesser-dark") {
        titleBarTint = "#262626";
    } else if (theme == "liquibyte") {
        titleBarTint = "#000000";
    } else if (theme == "lucario") {
        titleBarTint = "#2B3E50";
    } else if (theme == "material") {
        titleBarTint = "#263238";
    } else if (theme == "material-darker") {
        titleBarTint = "#212121";
    } else if (theme == "material-palenight") {
        titleBarTint = "#292D3E";
    } else if (theme == "material-ocean") {
        titleBarTint = "#0F111A";
    } else if (theme == "mbo") {
        titleBarTint = "#2C2C2C";
    } else if (theme == "mdn-like") {
        lightTitleBar = true;
        titleBarTint = "#FCFCFC";
    } else if (theme == "midnight") {
        titleBarTint = "#0F192A";
    } else if (theme == "monokai") {
        titleBarTint = "#272822";
    } else if (theme == "moxer") {
        titleBarTint = "#090A0F";
    } else if (theme == "neat") {
        lightTitleBar = true;
        titleBarTint = "#FFFFFF";
    } else if (theme == "neo") {
        lightTitleBar = true;
        titleBarTint = "#FFFFFF";
    } else if (theme == "nord") {
        titleBarTint = "#2E3440";
    } else if (theme == "oceanic-next") {
        titleBarTint = "#304148";
    } else if (theme == "panda-syntax") {
        titleBarTint = "#292A2B";
    } else if (theme == "paraiso-dark") {
        titleBarTint = "#2F1E2E";
    } else if (theme == "paraiso-light") {
        lightTitleBar = true;
        titleBarTint = "#E7E9DB";
    } else if (theme == "pastel-on-dark") {
        titleBarTint = "#2C2827";
    } else if (theme == "railscasts") {
        titleBarTint = "#2B2B2B";
    } else if (theme == "rubyblue") {
        titleBarTint = "#112435";
    } else if (theme == "shadowfox") {
        titleBarTint = "#2A2A2E";
    } else if (theme == "solarized dark") {
        titleBarTint = "#002B36";
    } else if (theme == "solarized light") {
        lightTitleBar = true;
        titleBarTint = "#FDF6E3";
    } else if (theme == "the-matrix") {
        titleBarTint = "#000000";
    } else if (theme == "tomorrow-night-bright") {
        titleBarTint = "#000000";
    } else if (theme == "tomorrow-night-eighties") {
        titleBarTint = "#000000";
    } else if (theme == "ttcn") {
        lightTitleBar = true;
        titleBarTint = "#FFFFFF";
    } else if (theme == "twilight") {
        titleBarTint = "#141414";
    } else if (theme == "vibrant-ink") {
        titleBarTint = "#000000";
    } else if (theme == "xq-dark") {
        titleBarTint = "#0A001F";
    } else if (theme == "xq-light") {
        lightTitleBar = true;
        titleBarTint = "#FFFFFF";
    } else if (theme == "yeti") {
        lightTitleBar = true;
        titleBarTint = "#ECEAE8";
    } else if (theme == "zenburn") {
        titleBarTint = "#3F3F3F";
    } else if (theme == "night") {
        titleBarTint = "#0A001F";
    }
    document.getElementById("codeContainer").style.background = titleBarTint;
    if (lightTitleBar) {
        document.getElementById("titleField").style.color = "#000";
    } else {
        document.getElementById("titleField").style.color = "#fff";
    }
    console.log(codeView.style.backgroundColor);
}

//Creating dynamic link that automatically click
function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    link.click();
    //after creating link you should delete dynamic link
    //clearDynamicLink(link); 
}

//Your modified code.
function printToFile(div) {

    html2canvas(div, {
        scale: document.getElementById("scaleF").value,
        backgroundColor: null,
    }).then(function (canvas) {
        var imageName = "Code";
        if (document.getElementById("titleField").value.length > 0) {
            imageName = document.getElementById("titleField").value;
        }

        var myImage = canvas.toDataURL("image/png");
        //create your own dialog with warning before saving file
        //beforeDownloadReadMessage();
        //Then download file
        downloadURI("data:" + myImage, imageName + ".png");
        // document.body.appendChild(canvas);
    });

}

function saveText() {
    var code = myCodeMirror.getValue();
    var fName = "TheCode.txt"
    if (document.getElementById("titleField").value.length > 0) {
        fName = document.getElementById("titleField").value;
    }
    //document.getElementById("titleField").value
    var blob = new Blob([code], {
        type: "text/plain;charset=utf-8"
    });
    saveAs(blob, fName);
}

function saveCodePic() {
    printToFile(document.getElementById("codeContainer"));
    // printToFile(document.body);
}

function readCB() {

    navigator.clipboard.readText()
        .then(text => {
            console.log('Pasted content: ', text);
        })
        .catch(err => {
            console.error('Failed to read clipboard contents: ', err);
        });
}

function writeCB() {
    var code = myCodeMirror.getValue();
    copyToClipboard(code);
}
const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    const selected =
        document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    if (selected) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selected);
    }
};
// console.log(text);

// saveCodePic()
