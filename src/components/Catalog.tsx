import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import nocturneImage from "@/assets/nocturne-perfume.jpg";
import eclatImage from "@/assets/eclat-perfume.jpg";
import boisImage from "@/assets/bois-eternel-perfume.jpg";
import orientImage from "@/assets/orient-mystique-perfume.jpg";

const Catalog = () => {
  const categories = [
    { name: "🌸 Floraux", color: "pink" },
    { name: "🌲 Boisés", color: "brown" },
    { name: "🍋 Hespéridés", color: "yellow" },
    { name: "🌌 Orientaux", color: "purple" },
    { name: "🔥 Exclusivités", color: "gold" }
  ];

  const perfumes = [
    {
      id: 1,
      name: "Nocturne",
      category: "🌌 Orientaux",
      image: nocturneImage,
      price: "29,90€",
      description: "Tête : Bergamote, Cardamome • Cœur : Rose de Damas, Oud • Fond : Musc, Ambre",
      isExclusive: false
    },
    {
      id: 2,
      name: "Éclat",
      category: "🌸 Floraux",
      image: eclatImage,
      price: "27,90€",
      description: "Tête : Freesia, Poire • Cœur : Pivoine, Magnolia • Fond : Musc blanc, Cèdre",
      isExclusive: false
    },
    {
      id: 3,
      name: "Bois Éternel",
      category: "🌲 Boisés",
      image: boisImage,
      price: "32,90€",
      description: "Tête : Citron vert, Poivre • Cœur : Bois de santal, Vétiver • Fond : Ambre gris, Mousse",
      isExclusive: true
    },
    {
      id: 4,
      name: "Orient Mystique",
      category: "🔥 Exclusivités",
      image: orientImage,
      price: "35,90€",
      description: "Tête : Épices orientales • Cœur : Encens, Myrrhe • Fond : Bois d'agar, Vanille",
      isExclusive: true
    }
  ];

  const handleOrder = (perfumeName: string) => {
    const message = `Bonjour ! Je souhaiterais commander le parfum "${perfumeName}" de la collection Universens. Pouvez-vous me donner plus d'informations ?`;
    const whatsappUrl = `https://wa.me/33123456789?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="parfums" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gold mb-6">
            Notre Collection
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos créations olfactives, inspirées des plus grands parfumeurs du monde
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="px-4 py-2 text-sm border-gold/30 text-gold hover:bg-gold/10 cursor-pointer transition-colors"
            >
              {category.name}
            </Badge>
          ))}
        </div>

        {/* Perfumes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {perfumes.map((perfume) => (
            <div 
              key={perfume.id} 
              className="luxury-card hover-lift group relative overflow-hidden"
            >
              {/* Exclusive Badge */}
              {perfume.isExclusive && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-gold text-background font-semibold">
                    Exclusif
                  </Badge>
                </div>
              )}

              {/* Image */}
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={perfume.image} 
                  alt={`Parfum ${perfume.name}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-display font-semibold text-gold">
                    {perfume.name}
                  </h3>
                  <span className="text-lg font-semibold text-foreground">
                    {perfume.price}
                  </span>
                </div>

                <Badge variant="outline" className="text-xs border-muted text-muted-foreground">
                  {perfume.category}
                </Badge>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {perfume.description}
                </p>

                <Button 
                  className="w-full luxury-button"
                  onClick={() => handleOrder(perfume.name)}
                >
                  Commander
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Plus de parfums disponibles sur demande
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="border-gold text-gold hover:bg-gold hover:text-background transition-colors"
            onClick={() => document.getElementById('commander')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Voir toute la collection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Catalog;