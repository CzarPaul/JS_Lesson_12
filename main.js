class options {
    constructor(height, width, bg, c, fontSize, textAlign){
        this.height = height + 'px';
        this.width = width + 'px';
        this.bg = bg;
        this.c = c;
        this.fontSize = fontSize + 'px';
        this.textAlign = textAlign;
    }

    createDiv(text) {
        let div = document.createElement('div');
        div.textContent = text;
        div.style.height = this.height;
        div.style.width = this.width;
        div.style.backgroundColor = this.bg;
        div.style.color = this.c;
        div.style.fontSize = this.fontSize;
        div.style.textAlign = this.textAlign;
        document.body.appendChild(div);
        return div;
    }
}

let option = new options(100, 100, 'yellow', 'green', 20, 'center');

option.createDiv('Hello World');