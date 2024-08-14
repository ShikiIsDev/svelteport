<script>
    let sections = {
      home: null,
      about: null,
      portfolio: null,
      contact: null,
    };
  
    const scrollToSection = (section) => {
      sections[section]?.scrollIntoView({ behavior: 'smooth' });
    };
  
    import { onMount } from 'svelte';
    
    onMount(() => {
      sections.home = document.getElementById('home');
      sections.about = document.getElementById('about');
      sections.portfolio = document.getElementById('portfolio');
      sections.contact = document.getElementById('contact');
    });
  </script>
  
  <nav class="fixed top-0 left-0 w-full py-4 px-6 z-10 shadow-lg bg-gray-100 opacity-90 flex items-center">
    <img src="/images/ARcardicon.jpg" alt="icon" class="w-10 h-10 rounded-full mr-4"/>
    <ul class="flex space-x-4 text-xl justify-end font-bold hover:text-gray-400 w-full">
      <li>
        <a href="#home" on:click|preventDefault={() => scrollToSection('home')} class="text-black hover:text-gray-300">Home</a>
      </li>
      <li>
        <a href="#about" on:click|preventDefault={() => scrollToSection('about')} class="text-black hover:text-gray-300">About</a>
      </li>
      <li>
        <a href="#portfolio" on:click|preventDefault={() => scrollToSection('portfolio')} class="text-black hover:text-gray-300">Portfolio</a>
      </li>
      <li>
        <a href="#contact" on:click|preventDefault={() => scrollToSection('contact')} class="text-black hover:text-gray-300">Contact</a>
      </li>
    </ul>
  </nav>
  