import { Instagram, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Accueil", href: "#hero" },
    { name: "La Marque", href: "#marque" },
    { name: "Parfums", href: "#parfums" },
    { name: "Commander", href: "#commander" },
    { name: "Contact", href: "#contact" }
  ];

  const legalLinks = [
    { name: "Mentions légales", href: "#" },
    { name: "Conditions générales", href: "#" },
    { name: "Politique de confidentialité", href: "#" },
    { name: "Livraison & Retours", href: "#" }
  ];

  const socialLinks = [
    { 
      icon: <Instagram className="w-5 h-5" />, 
      href: "https://instagram.com/universensparfums",
      name: "Instagram"
    },
    { 
      icon: <Mail className="w-5 h-5" />, 
      href: "mailto:universensparfums@gmail.com",
      name: "Email"
    },
    { 
      icon: <MessageCircle className="w-5 h-5" />, 
      href: "https://wa.me/33123456789",
      name: "WhatsApp"
    }
  ];

  return (
    <footer className="bg-secondary/20 border-t border-border/20 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/7f8b785b-7d7c-45d3-9c87-3db2f01a5507.png" 
                alt="Universens Parfums" 
                className="h-12 w-auto mb-4"
              />
              <p className="text-gold font-display text-lg font-semibold mb-2">
                "Un parfum, une émotion."
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Universens Parfums créé des fragrances d'exception, alliant élégance 
                et accessibilité. Chaque parfum raconte une histoire unique.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-card border border-border/30 rounded-lg flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/30 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-semibold text-foreground mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-display font-semibold text-foreground mb-6">
              Informations
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Universens Parfums. Tous droits réservés.
            </p>
            <p className="text-muted-foreground text-sm">
              Site réalisé par <span className="text-gold">TuelWeb</span> • 
              Hébergement libre • Universens Parfums © {currentYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;