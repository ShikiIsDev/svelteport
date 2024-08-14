<script>
    export let title = "Skills";
</script>

<div class="flex justify-center items-center h-screen"> <!-- Center the entire content vertically and horizontally -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ml-8"> <!-- Add left margin here -->
        <div class="max-w-lg rounded shadow-lg bg-white">
            <div class="font-bold text-xl mb-2 text-center">{title}</div>
            <div class="grid grid-cols-2">
                <div class="px-8 py-6">
                    <div class="font-bold text-xl mb-2"><h2>Design:</h2></div>
                    <ul>
                        <li>Character Design</li>
                        <li>Website Design</li>
                        <li>App Design</li>
                    </ul>
                </div>
                <div class="px-8 py-6">
                    <div class="font-bold text-xl mb-2"><h2>Programming:</h2></div>
                    <ul>
                        <li>Web development</li>
                        <li>Java</li>
                        <li>Python</li>
                        <li>C#</li>
                        <li>C++</li>
                        <li>Flutter</li>
                        <li>Javascript</li>
                    </ul>
                </div>
            </div>
        </div>
        <img src="images/feste_emote.png" alt="custom emote" class="max-w-full h-full mx-auto"/> <!-- Center the image -->
    </div>
</div>
