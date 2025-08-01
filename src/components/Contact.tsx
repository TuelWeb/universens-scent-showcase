import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Instagram, MapPin } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      description: "universensparfums@gmail.com",
      action: "mailto:universensparfums@gmail.com",
      buttonText: "Envoyer un email"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      description: "Réponse rapide garantie",
      action: "https://wa.me/33123456789?text=Bonjour%20Universens%20Parfums%20!",
      buttonText: "Nous contacter"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      title: "Instagram",
      description: "@universensparfums",
      action: "https://instagram.com/universensparfums",
      buttonText: "Nous suivre"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Atelier",
      description: "Paris, France",
      action: null,
      buttonText: "Nos créations"
    }
  ];

  const handleContact = (action: string | null) => {
    if (action) {
      window.open(action, '_blank');
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gold mb-6">
            Contactez-nous
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une question ? Un conseil personnalisé ? Notre équipe est là pour vous accompagner 
            dans votre découverte olfactive.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <Card key={index} className="luxury-card hover-lift text-center">
              <CardHeader>
                <div className="flex justify-center text-gold mb-2">
                  {method.icon}
                </div>
                <CardTitle className="text-xl font-display text-foreground">
                  {method.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {method.description}
                </p>
                {method.action && (
                  <Button 
                    variant="outline"
                    className="w-full border-gold text-gold hover:bg-gold hover:text-background transition-colors"
                    onClick={() => handleContact(method.action)}
                  >
                    {method.buttonText}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Hours & Info */}
          <Card className="luxury-card">
            <CardHeader>
              <CardTitle className="text-2xl font-display text-gold">
                Informations pratiques
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Horaires de réponse</h4>
                <p className="text-muted-foreground">
                  Lundi - Vendredi : 9h - 19h<br />
                  Samedi : 10h - 17h<br />
                  Dimanche : Fermé
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-2">Délai de réponse</h4>
                <p className="text-muted-foreground">
                  • WhatsApp : Réponse immédiate<br />
                  • Email : Sous 24h maximum<br />
                  • Instagram : Sous 2h en moyenne
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Langues parlées</h4>
                <p className="text-muted-foreground">
                  Français, Anglais, Arabe
                </p>
              </div>
            </CardContent>
          </Card>

          {/* FAQ Quick */}
          <Card className="luxury-card">
            <CardHeader>
              <CardTitle className="text-2xl font-display text-gold">
                Questions fréquentes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-1">
                  Quelle est la tenue de vos parfums ?
                </h4>
                <p className="text-sm text-muted-foreground">
                  Nos parfums ont une tenue de 6 à 12 heures selon les compositions.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-1">
                  Livrez-vous en France uniquement ?
                </h4>
                <p className="text-sm text-muted-foreground">
                  Actuellement oui, mais nous préparons l'international pour 2025.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-1">
                  Peut-on essayer avant d'acheter ?
                </h4>
                <p className="text-sm text-muted-foreground">
                  Nous proposons des échantillons sur demande pour certaines créations.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-1">
                  Vos parfums sont-ils cruelty-free ?
                </h4>
                <p className="text-sm text-muted-foreground">
                  Absolument ! Aucun test sur les animaux pour toutes nos créations.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;