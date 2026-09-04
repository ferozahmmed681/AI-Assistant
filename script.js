const chat = document.getElementById("chat");

const input = document.getElementById("messageInput");

const welcome = document.getElementById("welcome");


/* =========================
   SEND MESSAGE
========================= */

function sendMessage() {

    const text = input.value.trim();

    if (!text) return;

    if (welcome) {
        welcome.style.display = "none";
    }

    addMessage("user", text);

    input.value = "";

    input.style.height = "auto";

    showTyping();

    setTimeout(function () {

        removeTyping();

        const answer = generateAIAnswer(text);

        addMessage("ai", answer);

    }, 900);
}


/* =========================
   ADD MESSAGE
========================= */

function addMessage(type, text) {

    const message = document.createElement("div");

    message.className = "message " + type;


    const avatar = document.createElement("div");

    avatar.className = "avatar";

    avatar.textContent =
        type === "user"
            ? "👤"
            : "🤖";


    const bubble = document.createElement("div");

    bubble.className = "bubble";

    bubble.textContent = text;


    message.appendChild(avatar);

    message.appendChild(bubble);

    chat.appendChild(message);


    chat.scrollTop = chat.scrollHeight;
}


/* =========================
   TYPING
========================= */

function showTyping() {

    const message = document.createElement("div");

    message.className = "message ai";

    message.id = "typing";


    const avatar = document.createElement("div");

    avatar.className = "avatar";

    avatar.textContent = "🤖";


    const bubble = document.createElement("div");

    bubble.className = "bubble";


    bubble.innerHTML = `
        <div class="typing">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
        </div>
    `;


    message.appendChild(avatar);

    message.appendChild(bubble);

    chat.appendChild(message);

    chat.scrollTop = chat.scrollHeight;
}


function removeTyping() {

    const typing =
        document.getElementById("typing");

    if (typing) {
        typing.remove();
    }
}


/* =========================
   DEMO AI
========================= */

function generateAIAnswer(question) {

    const q = question.toLowerCase();


    if (
        q.includes("হ্যালো") ||
        q.includes("hello") ||
        q.includes("hi")
    ) {

        return "হ্যালো! 👋 আমি AI Assistant। কী জানতে চান?";
    }


    if (q.includes("html")) {

        return `
HTML হলো ওয়েব পেজের structure তৈরির ভাষা।

HTML দিয়ে তৈরি করা যায়:
• Text
• Button
• Image
• Form
• Menu
• Website Layout
        `;
    }


    if (
        q.includes("অ্যাপ") ||
        q.includes("app")
    ) {

        return `
অ্যাপ তৈরি করতে সাধারণত কয়েকটি ধাপ লাগে:

1. App Idea
2. UI Design
3. Coding
4. Testing
5. APK Build
6. Publish

Gathap-এর মতো HTML-based builder ব্যবহার করেও সহজ অ্যাপ তৈরি করা যায়।
        `;
    }


    if (
        q.includes("ওয়েবসাইট") ||
        q.includes("website")
    ) {

        return `
ওয়েবসাইট তৈরি করতে:

HTML = Structure
CSS = Design
JavaScript = Function

এই তিনটি ব্যবহার করে একটি সম্পূর্ণ ওয়েবসাইট তৈরি করা যায়।
        `;
    }


    if (q.includes("youtube")) {

        return `
YouTube-এর জন্য কয়েকটি ভালো বিষয়:

🎮 Gaming
💻 Technology
📱 Android Tips
🤖 AI
🎬 Video Editing
📚 Tutorial
        `;
    }


    return `
আপনার প্রশ্নটি বুঝেছি। 🤖

এই অ্যাপটি বর্তমানে Demo AI Mode-এ চলছে।

সত্যিকারের AI উত্তর পেতে একটি নিরাপদ AI API/Backend যুক্ত করতে হবে।
    `;
}


/* =========================
   SUGGESTION
========================= */

function useSuggestion(text) {

    input.value = text;

    sendMessage();
}


/* =========================
   CLEAR CHAT
========================= */

function clearChat() {

    if (!confirm("সব Chat মুছে ফেলতে চান?")) {
        return;
    }

    chat.innerHTML = "";
}


/* =========================
   ENTER TO SEND
========================= */

input.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Enter" &&
            !event.shiftKey
        ) {

            event.preventDefault();

            sendMessage();
        }
    }
);


/* =========================
   AUTO TEXTAREA HEIGHT
========================= */

input.addEventListener(
    "input",
    function() {

        this.style.height = "auto";

        this.style.height =
            Math.min(
                this.scrollHeight,
                120
            ) + "px";
    }
);
