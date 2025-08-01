import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sofia M.",
      rating: 5,
      comment: "Parfum incroyable, il tient toute la journée ! Je reçois des compliments partout où je vais. La qualité est vraiment au rendez-vous.",
      perfume: "Éclat"
    },
    {
      id: 2,
      name: "Karim L.",
      rating: 5,
      comment: "On dirait un parfum de luxe, mais à un prix accessible. Universens a réussi à créer quelque chose d'exceptionnel.",
      perfume: "Bois Éternel"
    },
    {
      id: 3,
      name: "Inès B.",
      rating: 5,
      comment: "Mon nouveau coup de cœur olfactif ❤️ L'odeur est sophistiquée et unique. Je le recommande vivement !",
      perfume: "Orient Mystique"
    },
    {
      id: 4,
      name: "Thomas R.",
      rating: 5,
      comment: "Livraison ultra rapide et parfum de qualité exceptionnelle. Service client très professionnel et à l'écoute.",
      perfume: "Nocturne"
    },
    {
      id: 5,
      name: "Amira K.",
      rating: 5,
      comment: "J'ai découvert Universens par hasard et c'est devenu ma marque de référence. Des parfums qui racontent une histoire !",
      perfume: "Éclat"
    }
  ];

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex gap-1">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-gold text-gold" />
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gold mb-6">
            Témoignages Clients
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez ce que nos clients pensent de nos créations olfactives
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="luxury-card hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <StarRating rating={testimonial.rating} />
                  <span className="text-xs text-gold font-medium bg-gold/10 px-2 py-1 rounded">
                    {testimonial.perfume}
                  </span>
                </div>
                
                <blockquote className="text-foreground mb-4 leading-relaxed">
                  "{testimonial.comment}"
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-gold/20 to-gold/40 rounded-full flex items-center justify-center mr-3">
                    <span className="text-gold font-semibold text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Client vérifié
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Rejoignez des centaines de clients satisfaits
          </p>
          <div className="flex items-center justify-center gap-2 text-gold">
            <StarRating rating={5} />
            <span className="font-semibold ml-2">4.9/5 basé sur 127 avis</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;