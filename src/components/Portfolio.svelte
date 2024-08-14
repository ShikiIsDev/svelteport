<script>
    export let title = "Portfolio";
</script>

<div class="max-w-lg rounded shadow-lg bg-gray-200 p-6">
    <div class="font-bold text-xl mb-4 text-center">{title}</div>
    <div class="grid grid-cols-3 gap-4">
        <!-- Project 1 -->
        <a href="/portfolio/ellen" class="block">
            <img class="w-full rounded transform transition-transform duration-300 hover:scale-105" src="images/ellen.jpg" alt="ellen"/>
        </a>

        <!-- Project 2 -->
        <a href="/portfolio/luffy" class="block">
            <img class="w-full rounded transform transition-transform duration-300 hover:scale-105" src="images/luffy.jpg" alt="luffy"/>
        </a>

        <!-- Project 3 -->
        <a href="/portfolio/pawa" class="block">
            <img class="w-full rounded transform transition-transform duration-300 hover:scale-105" src="images/pawa.jpg" alt="power"/>
        </a>

        <!-- Project 4 -->
        <a href="/portfolio/arcard" class="block">
            <img class="w-full rounded transform transition-transform duration-300 hover:scale-105" src="images/ARcard.jpg" alt="ARcard" />
        </a>

        <!-- Project 5 -->
        <a href="/portfolio/app1" class="block">
            <img class="w-full rounded transform transition-transform duration-300 hover:scale-105" src="images/app1.jpg" alt="app1" />
        </a>

        <!-- Project 6 -->
        <a href="/portfolio/wordpresssite" class="block">
            <img class="w-full rounded transform transition-transform duration-300 hover:scale-105" src="images/WordpressSite.PNG" alt="WordpressSite" />
        </a>
    </div>
</div>
