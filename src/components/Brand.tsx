import { Beaker, Package, Truck, Leaf } from "lucide-react";

const Brand = () => {
  const features = [
    {
      icon: <Beaker className="w-8 h-8" />,
      title: "Sélection rigoureuse",
      description: "Des ingrédients de haute qualité soigneusement sélectionnés"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Fabrication artisanale",
      description: "Chaque parfum est créé avec passion et savoir-faire"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Livraison rapide",
      description: "Expédition rapide et sécurisée partout en France"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Éthique & Responsable",
      description: "Parfums non testés sur les animaux, respect de l'environnement"
    }
  ];

  return (
    <section id="marque" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gold mb-6">
            L'Excellence Universens
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
        </div>

        {/* Description */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-6">
            <span className="text-gold font-semibold">Universens Parfums</span>, c'est une expérience sensorielle unique. 
            Notre mission : proposer des parfums accessibles et raffinés, pour sublimer votre quotidien.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            Inspirés des plus grandes maisons, nos fragrances allient élégance, puissance et tenue longue durée.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="luxury-card text-center hover-lift group"
            >
              <div className="text-gold mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brand;