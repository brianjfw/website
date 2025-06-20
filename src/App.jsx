import './App.css'
import PartnerTicker from './PartnerTicker'
import { useState, useEffect } from 'react'
import StorySection from './StorySection'
import TestimonialsSection from './TestimonialsSection'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

function App() {
  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=1200&q=80',
      alt: 'Greek bakery table',
      heading: 'ZORBAS BAKERY + FOODS',
      subheading: 'BRINGING GREECE TO YOUR HOME',
      buttonText: 'LEARN MORE',
      buttonLink: '#foods',
    },
    {
      image: 'https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?auto=format&fit=crop&w=1200&q=80',
      alt: 'Artisan breads',
      heading: 'ARTISAN BREADS',
      subheading: 'AUTHENTIC FRESH & MADE DAILY',
      buttonText: 'VIEW PRODUCTS',
      buttonLink: '#foods',
    },
    {
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
      alt: 'Quality Greek food',
      heading: 'UNMATCHED QUALITY',
      subheading: 'AUTHENTIC TASTES. DELICIOUS!',
      buttonText: 'VIEW PRODUCTS',
      buttonLink: '#foods',
    },
  ]
  const [currentSlide, setCurrentSlide] = useState(0)
  const [prevSlide, setPrevSlide] = useState(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [showCurrentFadeIn, setShowCurrentFadeIn] = useState(false)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  // Top bar cycling state
  const topBarItems = [
    { type: 'phone', content: (<><span role="img" aria-label="phone">📞</span> +1 604-439-7731</>) },
    { type: 'hours', content: (<><span role="img" aria-label="clock">🕒</span> Mon – Fri: 6:00am – 3:00pm PST</>) },
    { type: 'email', content: (<><span role="img" aria-label="email">✉️</span> contact@zorbasfoods.ca</>) },
    { type: 'social', content: (
      <span className="zorbas-social">
        <a href="https://www.facebook.com/ZorbasBakery" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://twitter.com/zorbasbakery" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://www.instagram.com/zorbasfoods/" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </span>
    ) },
  ];
  const [topBarIndex, setTopBarIndex] = useState(0);
  const [isMobileTopBar, setIsMobileTopBar] = useState(false);

  const featuredProducts = [
    {
      name: 'AUTHENTIC GREEK PITA BREAD – WHITE',
      subtext: 'Soft, fluffy, and perfect for dipping or wrapping your favorite fillings.',
      image: 'https://placehold.co/800x800/d2691e/fff?text=Pita',
      alt: 'Greek Pita Bread',
      badge: 'Featured',
      buttonText: 'Learn More',
      buttonLink: '#foods'
    },
    {
      name: 'TZATZIKI – GREEK YOGURT',
      subtext: 'A creamy and refreshing dip made with real Greek yogurt, cucumber, and garlic.',
      image: 'https://placehold.co/800x800/f7c873/5a3e1b?text=Tzatziki',
      alt: 'Tzatziki Greek Yogurt',
      buttonText: 'Learn More',
      buttonLink: '#foods'
    },
    {
      name: 'PHYLLO: SPINACH & FETA SPANAKOPITA',
      subtext: 'A classic Greek savory pastry with a flaky phyllo crust.',
      image: 'https://placehold.co/800x800/d2691e/fff?text=Spanakopita',
      alt: 'Phyllo Spinach & Feta Spanakopita',
      buttonText: 'Learn More',
      buttonLink: '#foods'
    },
    {
      name: 'BAKED FALAFEL: ORIGINAL',
      subtext: 'A delicious and healthy alternative to fried falafel, perfect for salads and sandwiches.',
      image: 'https://placehold.co/800x800/f7c873/5a3e1b?text=Falafel',
      alt: 'Baked Falafel Original',
      buttonText: 'Learn More',
      buttonLink: '#foods'
    },
  ];

  useEffect(() => {
    // Detect mobile width for top bar
    function handleResize() {
      setIsMobileTopBar(window.innerWidth <= 768);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isMobileTopBar) return;
    const timer = setInterval(() => {
      setTopBarIndex((prev) => (prev + 1) % topBarItems.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isMobileTopBar, topBarItems.length]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPrevSlide(currentSlide)
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
      setIsTransitioning(true)
      setShowCurrentFadeIn(true)
      setTimeout(() => {
        setIsTransitioning(false)
        setPrevSlide(null)
        setShowCurrentFadeIn(false)
      }, 1500) // match CSS transition duration
    }, 5000)
    return () => clearTimeout(timer)
  }, [currentSlide, heroSlides.length])

  return (
    <div className="zorbas-app-container" style={{ padding: 10, minHeight: '100vh', boxSizing: 'border-box', width: '100%', height: '100%', background: 'linear-gradient(135deg, #fff8f0 0%, #fbeee6 100%)' }}>
      {/* Top Bar */}
      <div className="zorbas-topbar">
        {isMobileTopBar ? (
          <div className="zorbas-topbar-cycler">
            {topBarItems[topBarIndex].content}
          </div>
        ) : (
          <div className="zorbas-contact-social-wrap">
            <div className="zorbas-contact">
              <span role="img" aria-label="phone">📞</span> +1 604-439-7731
              <span className="zorbas-divider">|</span>
              <span role="img" aria-label="clock">🕒</span> Mon – Fri: 6:00am – 3:00pm PST
              <span className="zorbas-divider">|</span>
              <span role="img" aria-label="email">✉️</span> contact@zorbasfoods.ca
            </div>
            <div className="zorbas-social">
              <a href="https://www.facebook.com/ZorbasBakery" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://twitter.com/zorbasbakery" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://www.instagram.com/zorbasfoods/" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
          </div>
        )}
      </div>

      {/* Header & Navigation */}
      <header className="zorbas-header">
        <a href="/">
          <img
            src="https://zorbasfoods.com/wp-content/uploads/elementor/thumbs/Zorbas_Logo-q6yjkzh3wv5jxnswb6f2adxj7e3r049pn42b9p4iqw.png"
            alt="Zorbas Logo"
            className="zorbas-logo"
          />
        </a>
        <button
          className="zorbas-hamburger"
          aria-label="Open navigation menu"
          aria-expanded={mobileNavOpen}
          onClick={() => setMobileNavOpen((open) => !open)}
        >
          <span className="zorbas-hamburger-bar" />
          <span className="zorbas-hamburger-bar" />
          <span className="zorbas-hamburger-bar" />
        </button>
        <nav className={`zorbas-nav${mobileNavOpen ? ' zorbas-nav-mobile-open' : ''}`}>
          <ul>
            <li><a href="#about" onClick={() => setMobileNavOpen(false)}>About Zorbas</a></li>
            <li><a href="#foods" onClick={() => setMobileNavOpen(false)}>Our Foods</a></li>
            <li><a href="#healthy" onClick={() => setMobileNavOpen(false)}>Healthy Eating</a></li>
            <li><a href="#contact" onClick={() => setMobileNavOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="zorbas-hero-upgraded" style={{ minHeight: '420px', position: 'relative' }}>
        <div className="zorbas-hero-bg">
          {/* Previous Slide (fading out) */}
          {prevSlide !== null && (
            <img
              src={heroSlides[prevSlide].image}
              alt={heroSlides[prevSlide].alt}
              className="zorbas-hero-img zorbas-hero-img-previous"
              style={{
                opacity: isTransitioning ? 0 : 1,
                zIndex: 1,
                transition: 'opacity 1.5s',
                position: 'absolute',
                inset: 0,
              }}
            />
          )}
          {/* Current Slide (fading in) */}
          <img
            src={heroSlides[currentSlide].image}
            alt={heroSlides[currentSlide].alt}
            className="zorbas-hero-img"
            style={{
              opacity: showCurrentFadeIn ? 1 : (prevSlide !== null ? 0 : 1),
              zIndex: 2,
              transition: showCurrentFadeIn ? 'opacity 1.5s' : 'none',
              position: 'absolute',
              inset: 0,
            }}
          />
          <div className="zorbas-hero-overlay" />
        </div>
        <div className="zorbas-hero-content">
          <h1>{heroSlides[currentSlide].heading}</h1>
          <p>{heroSlides[currentSlide].subheading}</p>
          <a className="zorbas-hero-btn" href={heroSlides[currentSlide].buttonLink}>{heroSlides[currentSlide].buttonText}</a>
        </div>
      </section>

      {/* Partner Ticker */}
      <PartnerTicker />

      {/* Product Slides (static) */}
      <section className="zorbas-slides-upgraded">
        <div className="zorbas-slide-card">
          <div className="zorbas-slide-card-img-wrap">
            <img src="https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=1200&q=80" alt="Bakery" />
            <div className="zorbas-slide-card-overlay" />
          </div>
          <div className="zorbas-slide-card-content">
            <h2>ZORBAS BAKERY + FOODS</h2>
            <p>BRINGING GREEK AND MEDITERRANEAN FOODS TO YOUR HOME</p>
            <a href="#foods" className="zorbas-slide-btn">LEARN MORE</a>
          </div>
        </div>
        <div className="zorbas-slide-card">
          <div className="zorbas-slide-card-img-wrap">
            <img src="https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=1200&q=80" alt="Bakery" />
            <div className="zorbas-slide-card-overlay" />
          </div>
          <div className="zorbas-slide-card-content">
            <h2>ARTISAN BREADS</h2>
            <p>AUTHENTIC FRESH &amp; MADE DAILY</p>
            <a href="#foods" className="zorbas-slide-btn">VIEW PRODUCTS</a>
          </div>
        </div>
        <div className="zorbas-slide-card">
          <div className="zorbas-slide-card-img-wrap">
            <img src="https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=1200&q=80" alt="Bakery" />
            <div className="zorbas-slide-card-overlay" />
          </div>
          <div className="zorbas-slide-card-content">
            <h2>UNMATCHED QUALITY</h2>
            <p>AUTHENTIC TASTES. DELICIOUS!</p>
            <a href="#foods" className="zorbas-slide-btn">VIEW PRODUCTS</a>
          </div>
        </div>
      </section>

      {/* Owner Quote */}
      <section className="zorbas-owner-quote">
        <h2>"Our passion is to bring the authentic tastes of Greece and the Mediterranean to your table every day."</h2>
        <div className="zorbas-owner-signature">— George, Owner</div>
      </section>

      <StorySection />

      <TestimonialsSection />

      {/* Product Categories */}
      <section className="zorbas-categories" id="foods">
        <h2>ZORBAS FOODS</h2>
        <p style={{ fontFamily: 'Avenir, Helvetica, Arial, sans-serif', fontSize: '1.25rem', fontWeight: 400, letterSpacing: 'normal', textTransform: 'none', color: '#5a3e1b' }}>
          Select a category below to explore our healthy and delicious products.
        </p>
        <div className="zorbas-category-list-upgraded">
          <a href="https://zorbasfoods.com/breads/" className="zorbas-category-card">
            <div className="zorbas-category-icon" aria-label="Breads">🥖</div>
            <h3>BREADS</h3>
            <p>Zorbas breads are made with Canadian Prairie wheat flour and follow traditional village recipes.</p>
          </a>
          <a href="https://zorbasfoods.com/dips/" className="zorbas-category-card">
            <div className="zorbas-category-icon" aria-label="Dips">🥣</div>
            <h3>DIPS</h3>
            <p>Zorbas dips are made from fresh local ingredients such as Okanagan goat yogurts and Fraser Valley vegetables.</p>
          </a>
          <a href="https://zorbasfoods.com/phyllos/" className="zorbas-category-card">
            <div className="zorbas-category-icon" aria-label="Phyllos">🥟</div>
            <h3>PHYLLOS</h3>
            <p>Zorbas phyllo pies are made with locally sourced ingredients, are vegetarian, and also are available in Gluten free.</p>
          </a>
          <a href="https://zorbasfoods.com/ready-to-eat/" className="zorbas-category-card">
            <div className="zorbas-category-icon" aria-label="Ready to Eat">🥗</div>
            <h3>READY-TO-EAT</h3>
            <p>Zorbas ready-to-eat products provide a healthy vegetarian option to add to any meal.</p>
          </a>
          <a href="https://zorbasfoods.com/sweet-stuff/" className="zorbas-category-card">
            <div className="zorbas-category-icon" aria-label="Sweet Stuff">🍯</div>
            <h3>SWEET STUFF</h3>
            <p>Zorbas traditional desserts are made with Fraser Valley honey, nuts, spices, dried fruit and lemon.</p>
          </a>
          <a href="https://zorbasfoods.com/mezethes/" className="zorbas-category-card">
            <div className="zorbas-category-icon" aria-label="Mezethes">🍢</div>
            <h3>MEZETHES</h3>
            <p>Zorbas phyllo pies are also available in bite size portions with a variety of seasonal and traditional flavours.</p>
          </a>
        </div>
      </section>

      {/* Healthy Eating Badges */}
      <section className="zorbas-healthy-badges">
        <div className="zorbas-healthy-badge">
          <img src="https://zorbasfoods.com/wp-content/uploads/2023/06/Stamp-NON-GMO.png" alt="NON GMO" />
          <h4>NON GMO</h4>
          <p>We are in the process of certifying all our products Non-GMO. We believe non-GMO ingredients are safer to eat.</p>
        </div>
        <div className="zorbas-healthy-badge">
          <img src="https://zorbasfoods.com/wp-content/uploads/2023/06/Stamp-VEGAN.png" alt="VEGAN" />
          <h4>VEGAN</h4>
          <p>We offer many vegan products such as Homous dips, Pita bread, Greek Potatoes, Greek Rice and Baklava.</p>
        </div>
        <div className="zorbas-healthy-badge">
          <img src="https://zorbasfoods.com/wp-content/uploads/2023/06/Stamp-GLUTEN-FREE.png" alt="GLUTEN FREE" />
          <h4>GLUTEN FREE</h4>
          <p>Enjoy gluten free Tzatziki, Homous dips, Falafels, Greek Potatoes, Greek Rice, and more.</p>
        </div>
        <div className="zorbas-healthy-badge">
          <img src="https://zorbasfoods.com/wp-content/uploads/2023/06/Stamp-BAKED-NOT-FRIED.png" alt="BAKED NOT FRIED" />
          <h4>BAKED NOT FRIED</h4>
          <p>We bake instead of deep fry, for less fat and fewer calories, but with great crunch.</p>
        </div>
        <div className="zorbas-healthy-badge">
          <img src="https://zorbasfoods.com/wp-content/uploads/2023/06/Stamp-LACTOSE-FREE.png" alt="LACTOSE FREE" />
          <h4>LACTOSE FREE</h4>
          <p>Enjoy our Tzatziki dip made with goat's milk and more lactose free options.</p>
        </div>
      </section>

      {/* Zeus Worthy Goods */}
      <section className="zorbas-zeus">
        <h2>ZEUS WORTHY GOODS</h2>
        <p style={{ fontFamily: 'Avenir, Helvetica, Arial, sans-serif', fontSize: '1.25rem', fontWeight: 400, letterSpacing: 'normal', textTransform: 'none', color: '#5a3e1b' }}>
          100% Greek goodness inside all of our products!
        </p>
      </section>

      {/* Featured Products */}
      <section className="zorbas-featured-products-upgraded">
        {featuredProducts.map((product, index) => (
          <div className="zorbas-featured-card" key={index}>
            <div className="zorbas-featured-card-img-banner">
              <img 
                src={product.image} 
                alt={product.alt} 
              />
            </div>
            {product.badge && <div className="zorbas-featured-badge">{product.badge}</div>}
            <div className="zorbas-featured-card-content">
              <div>
                <h3>{product.name}</h3>
                <p className="zorbas-featured-card-subtext">{product.subtext}</p>
              </div>
              <a href={product.buttonLink} className="zorbas-featured-card-btn">{product.buttonText}</a>
            </div>
          </div>
        ))}
      </section>

      {/* Map Section */}
      <section className="zorbas-map-section">
        <iframe
          title="Zorbas Bakery + Foods Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.953526392578!2d-122.9859566843144!3d49.20525297932295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867645d44335a9%3A0x1b9137b55a30372f!2s7173%20Buller%20Ave%2C%20Burnaby%2C%20BC%20V5J%204S1!5e0!3m2!1sen!2sca!4v1680000000001!5m2!1sen!2sca"
          width="100%"
          height="340"
          style={{ border: 0, boxShadow: '0 2px 16px rgba(90,62,27,0.10)' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      {/* Value Statements as Trust Badges - moved below map, flush style */}
      <section className="zorbas-trust-badges-flush">
        <div className="zorbas-trust-badges">
          <div className="zorbas-trust-badge zorbas-trust-badge-cell1">
            <span className="zorbas-trust-icon" aria-label="Baked with Care">🥖</span>
            <h4>BAKED WITH CARE</h4>
            <p>Our products are made with carefully selected ingredients from our trusted suppliers.</p>
          </div>
          <div className="zorbas-trust-badge zorbas-trust-badge-cell2">
            <span className="zorbas-trust-icon" aria-label="Quality is a Tradition">🏆</span>
            <h4>QUALITY IS A TRADITION</h4>
            <p>With over 60 years of refining our traditional family recipes and a passion for what we do is what makes our products so unique.</p>
          </div>
          <div className="zorbas-trust-badge zorbas-trust-badge-cell3">
            <span className="zorbas-trust-icon" aria-label="On Time Delivery">🚚</span>
            <h4>ON TIME DELIVERY</h4>
            <p>Each morning, bright and early orders are delivered to our customers across the lower mainland.</p>
          </div>
        </div>
      </section>

      {/* Footer Modern Premium */}
      <footer className="zorbas-footer-premium">
        <div className="zorbas-footer-premium-top">
          <div className="zorbas-footer-premium-logo-quote">
            <div className="zorbas-footer-premium-quote">
              <span>“Baking with love and tradition since 1969.”</span>
            </div>
          </div>
          <nav className="zorbas-footer-premium-nav">
            <a href="#about">About</a>
            <a href="#foods">Our Foods</a>
            <a href="#healthy">Healthy Eating</a>
            <a href="#contact">Contact</a>
            <a href="https://zorbasfoods.com/where-to-buy-zorbas/" target="_blank" rel="noopener noreferrer">Where to Buy</a>
          </nav>
        </div>
        <div className="zorbas-footer-premium-divider" />
        <div className="zorbas-footer-premium-bottom" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap'}}>
          <div className="zorbas-footer-premium-copyright">
            &copy; {new Date().getFullYear()} Zorbas Bakery + Foods. All rights reserved.
          </div>
          <div className="zorbas-footer-premium-social">
            <a href="https://www.facebook.com/ZorbasBakery" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com/zorbasbakery" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.instagram.com/zorbasfoods/" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
