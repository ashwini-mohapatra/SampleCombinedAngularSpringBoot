import { Injectable } from "@angular/core";
import { Post } from "./post.model";


@Injectable({providedIn: "root"})
export class PostService{
    listOfPosts: Post[] = [
        new Post(
          'Fire',
          "Fire is the rapid oxidation of a material (the fuel) in the exothermic chemical process of combustion, releasing heat, light, and various reaction products.[1][a] Fire is hot because the conversion of the weak double bond in molecular oxygen, O2, to the stronger bonds in the combustion products carbon dioxide and water releases energy (418 kJ per 32 g of O2); the bond energies of the fuel play only a minor role here.[2] At a certain point in the combustion reaction, called the ignition point, flames are produced. The flame is the visible portion of the fire. Flames consist primarily of carbon dioxide, water vapor, oxygen and nitrogen. If hot enough, the gases may become ionized to produce plasma.[3] Depending on the substances alight, and any impurities outside, the color of the flame and the fire's intensity will be different.",
          'https://upload.wikimedia.org/wikipedia/commons/3/36/Large_bonfire.jpg',
          'Wikipedia',
          new Date(),
          0
        ),
        new Post(
          'Water',
          'Water (chemical formula H2O) is an inorganic, transparent, tasteless, odorless, and nearly colorless chemical substance, which is the main constituent of Earth\'s hydrosphere and the fluids of all known living organisms (in which it acts as a solvent[1]). It is vital for all known forms of life, even though it provides no calories or organic nutrients. Its chemical formula, H2O, indicates that each of its molecules contains one oxygen and two hydrogen atoms, connected by covalent bonds. The hydrogen atoms are attached to the oxygen atom at an angle of 104.45°.[2] "Water" is the name of the liquid state of H2O at standard conditions for temperature and pressure.',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Water_drop_001.jpg/200px-Water_drop_001.jpg',
          'Wikipedia',
          new Date(),
          1
        ),
        new Post(
          'Air',
          'Air is one of the four classical elements along with water, earth and fire in ancient Greek philosophy and in Western alchemy.',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Humorism.svg/220px-Humorism.svg.png',
          'Wikipedia',
          new Date(),
          2
        ),
        new Post(
          'Earth',
          "Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 71% of the Earth's surface is made up of water. The ocean covers most of that area, dwarfing other saltwater and freshwater bodies like lakes and rivers. The remaining 29% of Earth's surface is land, consisting of continents and islands. Much of Earth's polar regions is covered in ice. Earth's surface rests on several rigid tectonic plates[list], which are slowly moved by an underlying convective mantle layer. Earth's core remains active, generating Earth's magnetic field.",
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/220px-The_Earth_seen_from_Apollo_17.jpg',
          'Wikipedia',
          new Date(),
          3
        ),
        new Post(
          'Space',
          'Outer space, commonly shortened to space, is the expanse that exists beyond Earth and its atmosphere and between celestial bodies. Outer space is not completely empty—it is a hard vacuum containing a low density of particles, predominantly a plasma of hydrogen and helium, as well as electromagnetic radiation, magnetic fields, neutrinos, dust, and cosmic rays. The baseline temperature of outer space, as set by the background radiation from the Big Bang, is 2.7 kelvins (−270.45 °C; −454.81 °F).[1] The plasma between galaxies is thought to account for about half of the baryonic (ordinary) matter in the universe, having a number density of less than one hydrogen atom per cubic metre and a temperature of millions of kelvins.[2] Local concentrations of matter have condensed into stars and galaxies. Studies indicate that 90% of the mass in most galaxies is in an unknown form, called dark matter, which interacts with other matter through gravitational but not electromagnetic forces.[3][4] Observations suggest that the majority of the mass-energy in the observable universe is dark energy, a type of vacuum energy that is poorly understood.[5][6] Intergalactic space takes up most of the volume of the universe, but even galaxies and star systems consist almost entirely of empty space',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Earth%27s_atmosphere.svg/300px-Earth%27s_atmosphere.svg.png',
          'Wikipedia',
          new Date(),
          4
        ),
      ];

      getAllPosts(){
          return this.listOfPosts;
      }
      getPosts(num: number){
        return this.listOfPosts[num];
      }
      deletePost(id: number){
          this.listOfPosts.splice(id,1);
      }

      addPost(post: Post){
        this.listOfPosts.push(post);
      }
      updatePost(index: number,post: Post){
        this.listOfPosts[index]=post;
      }
      likePost(index:number){
        this.listOfPosts[index].likes++;
      }
}