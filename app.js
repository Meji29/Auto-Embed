document.addEventListener('DOMContentLoaded', function() {
    const inputBox = document.getElementById('linkInput');
    const outputBox = document.getElementById('linkOutput');

    inputBox.addEventListener('input', function() {
        const inputValue = inputBox.value;
        if (inputValue) {
            const transformedLinks = transformLinks(inputValue);
            outputBox.value = transformedLinks.join('\n');
            adjustTextareaHeight(outputBox);
        } else {
            outputBox.value = '';
            adjustTextareaHeight(outputBox);
        }
    });

    function transformLinks(input) {
        const links = input.split(/https:\/\//).filter(Boolean).map(link => 'https://' + link.trim());
        const transformedLinks = [];
        links.forEach((link, index) => {
            let transformedLink = link;
            if (link.includes('x.com')) {
                transformedLink = link.replace('x.com', 'fixupx.com');
            } else if (link.includes('bsky.app')) {
                transformedLink = link.replace('bsky.app', 'fxbsky.app');
            } else if (link.includes('instagram.com')) {
                transformedLink = link.replace('instagram.com', 'ddinstagram.com');
            }
            transformedLinks.push(transformedLink);
            if ((index + 1) % 5 === 0 && index !== links.length - 1) {
                transformedLinks.push('--------------------------');
            }
        });
        return transformedLinks;
    }

    function adjustTextareaHeight(textarea) {
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
    }
});
