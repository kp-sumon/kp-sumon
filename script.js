document.addEventListener("DOMContentLoaded", () => {
    const sendMsgBtn = document.getElementById("sendMsgBtn");
    const secretMessage = document.getElementById("secretMessage");
    const successAlert = document.getElementById("successAlert");
    const weatherStatus = document.getElementById("weatherStatus");

    // ১. এনভায়রনমেন্ট স্ট্যাটাস আপডেট (কাল্পনিক লাইভ ইন্টারফেস)
    if (weatherStatus) {
        setTimeout(() => {
            weatherStatus.innerHTML = "🌌 Quantum Neural Sync: Active";
        }, 2000);
    }

    // ২. সিক্রেট মেসেজ ফায়ারবেসে পাঠানোর লজিক
    if (sendMsgBtn && secretMessage) {
        sendMsgBtn.addEventListener("click", async () => {
            const messageText = secretMessage.value.trim();

            if (!messageText) {
                alert("দয়া করে খালি বক্সে কিছু একটা লিখুন!");
                return;
            }

            // বাটনের টেক্সট পরিবর্তন (লোডিং স্টেট)
            sendMsgBtn.innerText = "পাঠানো হচ্ছে...";
            sendMsgBtn.disabled = true;

            try {
                // ফায়ারবেসের 'messages' কালেকশনে মেসেজ সেভ করা
                if (window.db) {
                    await window.db.collection("messages").add({
                        text: messageText,
                        timestamp: firebase.firestore.FieldValue.serverTimestamp()
                    });

                    // সফল হলে অ্যালার্ট দেখানো
                    if (successAlert) {
                        successAlert.classList.remove("hidden");
                        setTimeout(() => successAlert.classList.add("hidden"), 5000);
                    }

                    // ইনপুট বক্স খালি করা
                    secretMessage.value = "";
                } else {
                    console.error("Firebase database is not initialized.");
                    alert("ফায়ারবেস ডাটাবেজ কানেকশন পাওয়া যায়নি!");
                }
            } catch (error) {
                console.error("Error adding document: ", error);
                alert("মেসেজটি পাঠানো যায়নি। পরে আবার চেষ্টা করুন।");
            } finally {
                // বাটন আগের অবস্থায় ফিরিয়ে আনা
                sendMsgBtn.innerText = "বার্তা পাঠান";
                sendMsgBtn.disabled = false;
            }
        });
    }
});

