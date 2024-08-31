function format(command, value) {
    document.execCommand(command, false, value);
}

function insertImage() {
    const url = prompt("Introduce la URL de la imagen:");
    if (url) {
        document.execCommand('insertImage', false, url);
    }
}

function insertTable() {
    const rows = prompt("Número de filas:");
    const cols = prompt("Número de columnas:");
    if (rows && cols) {
        let table = '<table border="1">';
        for (let i = 0; i < rows; i++) {
            table += '<tr>';
            for (let j = 0; j < cols; j++) {
                table += '<td>Celda</td>';
            }
            table += '</tr>';
        }
        table += '</table>';
        document.execCommand('insertHTML', false, table);
    }
}

function saveDocument() {
    const content = document.querySelector('.editor').innerHTML;
    localStorage.setItem('editorContent', content);
    alert('Documento guardado');
}

function loadDocument() {
    const content = localStorage.getItem('editorContent');
    if (content) {
        document.querySelector('.editor').innerHTML = content;
    } else {
        alert('No hay contenido guardado');
    }
}

function saveAsText() {
    const content = document.querySelector('.editor').innerText;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'documento.docx';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function findAndReplace() {
    const find = document.getElementById('find').value;
    const replace = document.getElementById('replace').value;
    if (find && replace) {
        const editor = document.querySelector('.editor');
        editor.innerHTML = editor.innerHTML.replace(new RegExp(find, 'g'), replace);
    }
}
