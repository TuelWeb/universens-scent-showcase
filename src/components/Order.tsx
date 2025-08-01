import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, CreditCard, Truck, Shield } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Order = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    perfume: '',
    format: '50ml',
    city: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.perfume) {
      toast({
        title: "Informations manquantes",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive"
      });
      return;
    }

    const orderMessage = `🌟 NOUVELLE COMMANDE UNIVERSENS PARFUMS 🌟

👤 Nom: ${formData.name}
📧 Email: ${formData.email}
🌺 Parfum: ${formData.perfume}
📏 Format: ${formData.format}
🏙️ Ville: ${formData.city}
💬 Message: ${formData.message || 'Aucun message spécifique'}

Merci de me confirmer la disponibilité et les modalités de livraison ! ✨`;

    const whatsappUrl = `https://wa.me/33123456789?text=${encodeURIComponent(orderMessage)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Commande envoyée !",
      description: "Vous allez être redirigé vers WhatsApp pour finaliser votre commande.",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppDirect = () => {
    const message = "Bonjour ! Je souhaiterais en savoir plus sur vos parfums Universens et passer une commande. Pouvez-vous m'aider ?";
    const whatsappUrl = `https://wa.me/33123456789?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="commander" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gold mb-6">
            Commander votre Parfum
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tous nos parfums sont disponibles à la commande dès aujourd'hui. 
            <br className="hidden md:block" />
            <span className="text-gold font-semibold">Livraison rapide & paiement sécurisé.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Order Form */}
          <Card className="luxury-card">
            <CardHeader>
              <CardTitle className="text-2xl font-display text-gold flex items-center gap-2">
                <MessageCircle className="w-6 h-6" />
                Formulaire de commande
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Nom complet *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Votre nom"
                      className="bg-input border-border/30 focus:border-gold"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="votre@email.com"
                      className="bg-input border-border/30 focus:border-gold"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Parfum choisi *
                    </label>
                    <select
                      name="perfume"
                      value={formData.perfume}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-input border border-border/30 rounded-lg focus:border-gold focus:outline-none text-foreground"
                      required
                    >
                      <option value="">Sélectionnez un parfum</option>
                      <option value="Nocturne">Nocturne - 29,90€</option>
                      <option value="Éclat">Éclat - 27,90€</option>
                      <option value="Bois Éternel">Bois Éternel - 32,90€</option>
                      <option value="Orient Mystique">Orient Mystique - 35,90€</option>
                      <option value="Autre">Autre (préciser dans le message)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Format
                    </label>
                    <select
                      name="format"
                      value={formData.format}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-input border border-border/30 rounded-lg focus:border-gold focus:outline-none text-foreground"
                    >
                      <option value="30ml">30ml</option>
                      <option value="50ml">50ml</option>
                      <option value="100ml">100ml</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Ville de livraison
                  </label>
                  <Input
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Votre ville"
                    className="bg-input border-border/30 focus:border-gold"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message (optionnel)
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Questions spécifiques, préférences..."
                    rows={4}
                    className="bg-input border-border/30 focus:border-gold resize-none"
                  />
                </div>

                <Button type="submit" className="w-full luxury-button">
                  Envoyer ma commande via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Quick Order & Info */}
          <div className="space-y-8">
            {/* Quick WhatsApp */}
            <Card className="luxury-card">
              <CardHeader>
                <CardTitle className="text-xl font-display text-gold">
                  Commande rapide
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Préférez-vous passer commande directement par WhatsApp ? 
                  Contactez-nous maintenant !
                </p>
                <Button 
                  onClick={handleWhatsAppDirect}
                  className="w-full luxury-button"
                  size="lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Commander via WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* Payment & Delivery Info */}
            <Card className="luxury-card">
              <CardHeader>
                <CardTitle className="text-xl font-display text-gold">
                  Informations pratiques
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-3">
                  <CreditCard className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Paiement</h4>
                    <p className="text-sm text-muted-foreground">
                      Virement bancaire, PayPal ou Lydia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Truck className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Livraison</h4>
                    <p className="text-sm text-muted-foreground">
                      Livraison rapide partout en France
                      <br />
                      Colissimo ou Chronopost
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Garantie</h4>
                    <p className="text-sm text-muted-foreground">
                      Satisfait ou remboursé sous 14 jours
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;