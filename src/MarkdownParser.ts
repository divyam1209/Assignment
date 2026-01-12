const output = document.getElementById("output");

let currentContainer = output;

let isInlineCode = false;
let isCodeBlock = false;
let backtickBuffer = "";

let codeBlockElement: HTMLPreElement | null = null;

export function addToken(token: string) {
    if (!currentContainer) return;

    if (token.includes("`")) {
        backtickBuffer += token;

        if (backtickBuffer.length === 3) {
            isCodeBlock = !isCodeBlock;

            if (isCodeBlock) {
                codeBlockElement = document.createElement("pre");
                codeBlockElement.style.background = "#111";
                codeBlockElement.style.color = "#0f0";
                codeBlockElement.style.padding = "8px";
                codeBlockElement.style.fontFamily = "monospace";
                codeBlockElement.style.borderRadius = "4px";
                currentContainer.appendChild(codeBlockElement);
            } else {
                codeBlockElement = null;
            }

            backtickBuffer = "";
            return;
        }

        if (backtickBuffer.length === 1 && !isCodeBlock) {
            isInlineCode = !isInlineCode;
            backtickBuffer = "";
            return;
        }

        return;
    }

    if (token === "\n") {
        if (isCodeBlock && codeBlockElement) {
            codeBlockElement.textContent += "\n";
        } else {
            currentContainer.appendChild(document.createElement("br"));
        }
        return;
    }

    if (isCodeBlock && codeBlockElement) {
        codeBlockElement.textContent += token;
        return;
    }

    if (isInlineCode) {
        const code = document.createElement("code");
        code.textContent = token;
        code.style.backgroundColor = "#eee";
        code.style.padding = "2px 4px";
        code.style.fontFamily = "monospace";
        code.style.borderRadius = "4px";
        currentContainer.appendChild(code);
        return;
    }

    const span = document.createElement("span");
    span.innerText = token;
    currentContainer.appendChild(span);
}
