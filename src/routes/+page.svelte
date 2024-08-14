<script>
    import Navbar from '../components/Navbar.svelte';
    import About from '../components/About.svelte'
    import Card from '../components/Card.svelte';
    import Portfolio from '../components/Portfolio.svelte';
  </script>
  
  <Navbar />
  
  <div id="home" class="bg-home flex justify-center items-center h-screen">
    <Card 
      title="Hello"
      description="Welcome to my Portfolio"
      imageUrl="/images/Enrico.jpg"
    />
  </div>
  
  
  <div id="about" class="bg-about flex justify-center items-center h-screen">
    <About/>
  </div>
  
  
  <div id="portfolio" class="bg-portfolio flex justify-center items-center h-screen">
    <Portfolio />
  </div>
  
  
  <div id="contact" class="bg-contact flex justify-center items-center h-screen">
    <Card 
      title="Get in Touch"
      description="Feel free to reach out to me for collaborations or inquiries. Thanks for viewing the page. Email: 21024483@myrp.edu.sg"
      imageUrl="/images/Enrico.jpg"
    />
  </div>
  
  