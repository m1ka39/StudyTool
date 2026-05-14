async function summarize() {
    try {
        const text = document.getElementById("sum_input").value;

        if (!text.trim()) {
            document.getElementById("sum_output").innerText = "Please enter text.";
            return;
        }

        const response = await fetch("http://127.0.0.1:5000/summarize", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ text })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Server error");
        }

        document.getElementById("sum_output").innerText = data.summary;

    } catch (err) {
        document.getElementById("sum_output").innerText =
            "Error: " + err.message;
    }
}