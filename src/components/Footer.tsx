import { Link } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { Button } from './ui/button';

export default function Footer() {
  return (
    <footer className="bg-background border-t md:px-14">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-foreground hover:text-primary">Home</Link></li>
              <li><Link to="/events" className="text-foreground hover:text-primary">Events</Link></li>
              <li><Link to="/venues" className="text-foreground hover:text-primary">Venues</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <p>Gasabo - Gacuriro</p>
            <p>Rwanda - Kigali</p>
            <p>Phone: <a href="tel:+250786263290" className="hover:text-primary">078 626 3290</a></p>
            <p>Email: <a href="mailto:info@EventHQ.com" className="hover:text-primary">info@EventHQ.com</a></p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary" aria-label="Twitter">
                <FaXTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <form className="flex flex-col space-y-2" onSubmit={(e) => e.preventDefault()}>
              <Input type="email" placeholder="Your email" aria-label="Email for newsletter" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} EventHQ. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

