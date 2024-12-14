function proceedToNextPage() {
    document.getElementById("welcome-page").style.display = "none";
    document.getElementById("main-page").style.display = "block";
    typeWriter();
}

// Function to create floating hearts animation
function createFloatingHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 3 + 3}s`;
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 6000);
    }, 500);
}

createFloatingHearts();

var i = 0;
var txt1 = `> Hello, My Baby Girl 😘❤️<
            Sanu, every moment with you feels like a page from the most beautiful story ever written 📖✨<
            You are the reason behind my happiest smiles.<<
            Thank you, baby ji meri life main ane ke liye 🥹❤ <
            I am very much grateful to you! 🙏💕 
            > 
            SAANVI, I LOVE YOU, BABY 💕🥰 << 
            I really love you a lot 😘💖! I love you so, so, so, so, so much 💕🥹💘—I can't even explain it in words!<<
            Thank you for making my life better 🌸❤️.
            >
            Sometimes, I find myself just thinking about how extraordinary you are, how you can be both my peace and my greatest excitement 🎉💫.<<
            I feel so lucky to have someone as kind, intelligent, beautiful and incredibly special as you by my side 💖. 
            >
            You’re not just my girlfriend; you’re my inspiration, my best friend, and my greatest blessing🧿❤️<
            I can’t wait to create countless memories together, each one more magical than the last. ❤️ <<
            LOVE YOU 🧿🤞😘❤️                                
            >                         
            DO YOU LOVE ME? <<`
    ;

var speed = 45;
function typeWriter() {
    if (i < txt1.length) {
        if (txt1.charAt(i) === '<') {
            document.getElementById("text1").innerHTML += '</br>';
        } else if (txt1.charAt(i) === '>') {
            document.getElementById("text1").innerHTML = '';
        } else {
            document.getElementById("text1").innerHTML += txt1.charAt(i);
        }
        i++;
        setTimeout(typeWriter, speed);
    } else {
        document.getElementById("proposal-buttons").style.display = "block";
    }
}


function showYesImage() {
    document.getElementById("text1").innerHTML = 'Always remember, you’re loved endlessly! 💕';
    document.getElementById("proposal-buttons").style.display = "none";
    document.getElementById("response-image").style.display = "block";
    document.getElementById("image").src = "Yes.jpg";
}