import { useState } from "react";
import IndividualArtist from "./IndividualArtist";
import natalieImage from "../images/natalie-peng.jpg";
import matthewImage from "../images/matthew_payne.jpg";
import bfc1 from "../images/bfc1.jpg";
import bfc2 from "../images/bfc2.jpeg";
import bfc3 from "../images/bfc3.jpeg";
import bfc4 from "../images/bfc4.jpeg";
import bfc5 from "../images/bfc5.jpeg";
import bfc6 from "../images/bfc6.jpeg";

interface Artist {
  id: number;
  name: string;
  biography: string;
  images?: string[];
}

interface Artists {
  [key: number]: Artist;
}

const lineup: Artists = {
  0: {
    id: 0,
    name: "The Muse Duo",
    biography: `Originally formed at the Eastman School of Music, the Muse Duo is a one-of-a-kind ensemble in the world of classical music. Comprised of the award-winning guitarist Collin Holloway and the dynamic pianist/composer Luke Benedict, the guitar and piano duo brings music that is eclectic and accessible to modern audiences. Just months after playing together for the first time, the duo embarked on a tour throughout the United States. Since then, the Muse Duo has performed in various venues and festivals, including a tour of the United States, the “Lynn New Music Festival” and the “Shellpoint Young Artist Series”. The Muse Duo strives to champion new compositions for the unique ensemble. Their repertoire primarily consists of Luke’s original works, where he composes music tailored for the duo. In July of 2022, the Duo traveled to New York to record their debut album, entitled “Experiments”. The album consists of entirely original music, composed by Luke. These works are melodically focused and neo-classically inspired, while engaging audiences through it’s modernistic rhythmic drive. “Experiments” will be released April 8th, 2023. Through unique instrumentation, a convincing blend of musical personalities, and music which is experimental and accessible, the Muse Duo brings an exciting new perspective to chamber music.`,
  },
  1: {
    id: 1,
    name: "Berwick Fiddle Consort",
    biography: `Comprised of conservatory-trained violinists with deep roots in both historical performance practice and traditional folk styles, the Berwick Fiddle Consort (BFC), founded by Lydia Becker, Julia Connor, and Sarah Douglass, performs historical folk music on period instruments. The ensemble strives to approach fiddle tunes from a multi-faceted perspective, combining baroque violin technique, aurally-learned regional fiddling traditions, and study of historical manuscripts. Drawing on these sources, BFC creates period-instrument arrangements of traditional folk music that experiment with various aspects of historical performance, always bringing their own creativity to bear.
    BFC concerts offer an exciting counterpoint to the traditional canon of historical repertoire and the classical music experience.  Audience members are encouraged to tap their feet to the music, cheer after tune changes, or get up and dance.  This relaxed, welcoming performance atmosphere allows listeners to to personally connect with the music and band members.
    BFC was formed in the summer of 2018 at the Oregon Bach Festival when Lydia, Julia, and Sarah began a nightly tradition of meeting after rehearsals to play fiddle tunes on baroque violins well into the night. At these nocturnal jam sessions, they quickly found that performing 17th and 18th century music from the British Isles and Canada on the kinds of instruments that were used at that time opened up new dimensions of sound, rhythm, and musical expression. BFC presented their debut concert at the 2019 Boston Early Music Festival Fringe, and have since been featured as Pegasus Rising Artists and NYS Baroque Young Artists, as well as the Society for Historically Informed Performance (SoHIP) Summer Concert season in both 2020 and 2021.  Other performances include appearances at the Beacon Hill Friends House in Boston, the Sudbury Historical Society, and the Shutesbury Athletic Club.  BFC has also been an ensemble-in-residence at Avaloch Farm in Boscawen, NH.
    `,
    images: [bfc1, bfc2, bfc3, bfc4, bfc5, bfc6],
  },
  2: {
    id: 2,
    name: "Natalie Pang",
    biography: `Natalie Pang is a recent graduate from the Eastman School of Music, where she completed her MM in Piano Performance and MA in Music Theory Pedagogy. She received her Bachelor of Music in Piano Performance and Music Theory from Eastman, and is a member of the music society Pi Kappa Lambda. As a pianist, Natalie has been first prizewinner of competitions such as the Canadian Music Competition and Montreal Classical Music Festival, and has given solo recitals in venues across the United States and Canada. Natalie is an active collaborative pianist, performing with chamber ensembles at Eastman and accompanying for public events, including the University of Rochester Schwartz Memorial Service and Black History Month at Eastman Recital. As a music theorist, she has conducted research on topic theory and music semiology, Schenkerian analysis, and underrepresented composers in performance and pedagogy, and presented her paper, “Performing the Flight Topic in Scriabin’s Fourth Sonata” at the 150th Anniversary of Scriabin Conference. Natalie is also an avid songwriter, and recently was a winner of the songwriting contest “If All of Rochester Wrote the Same Song”, with her song featured on radio shows Open Tunings with Scott Regan and Connections with Evan Dawson, and in performance at the JCC Centerstage in Rochester, NY. In her spare time, Natalie loves running, learning the theremin, and baking in an experimental fashion using generously approximate measurements.`,
    images: [natalieImage],
  },
  3: {
    id: 3,
    name: "Matthew Payne",
    biography: `Featured, both as an educator and singer by The Today Show and Boston Globe, Matthew Payne recently received his Master’s degree from the University of Maryland as a part of their prestigious Maryland Opera Studio. He has also received Bachelors degrees in vocal performance and in biology from Oberlin Conservatory and College. During the 2022/23 season, Mr. Payne served as Toledo Opera’s baritone resident artist. While there he sang the role of the Pirate King in their outreach production of The Pirates of Penzance, Vicomte Cascada in The Merry Widow, starred in their 2023 Gala, and sang with the Toledo Symphony in the Celebrazione del Coro. During the 2021/22 season he portrayed Papageno in Die Zauberflöte (Maryland Opera Studio), premiered the role of Aaron in Nailah Nombeko’s new opera Sunder (Annapolis Opera and Maryland Opera Studio), and portrayed Joe Harland in John Musto’s Later the Same Evening (Maryland Opera Studio). Mr. Payne has previously been a young artist with Central City Opera (2021), baritone fellow at the Tanglewood Music Center (2019), an artist at the Chautauqua Opera Company and Conservatory (2018), and a young artist with Opera Neo (2016 and 2017). His previous roles include: Billy Bigelow (Carousel), Marullo (Rigoletto), Mr. Gobineau (The Medium), and Massetto (Don Giovanni). As a soloist, Mr. Payne has performed in concerts with the French Embassy, Mid-Atlantic Symphony Orchestra, the Washington Opera Society, Chautauqua Symphony Orchestra, the Oberlin Conservatory Orchestra, the Society for New Music, and the Oberlin Baroque Ensemble.
  Matthew is also the co-founder of re-sound, a classical experience producer looking to re-shape and re-sound the way classical musicians present and perform in the 21st century. Educationally, Matthew is the founding voice teacher at Virtu. Academy, a high-quality online lesson provider. In his free time, Payne is also a published photographer.
  `,
    images: [matthewImage],
  },
};

const Artists = () => {
  const [currentArtist, setCurrentArtist] = useState<number>(0);

  return (
    <section className="performances-section p-10">
      <h3 className="text-5xl">Season Line Up</h3>
      <div className="py-20 flex justify-between items-center">
        <ul className="flex flex-col gap-12">
          {Object.values(lineup).map((artist) => {
            return (
              <li className="relative" key={artist.id}>
                <button
                  className="artist-btn text-4xl text-start text-gray-900 font-bold"
                  onClick={() => {
                    setCurrentArtist(artist.id);
                  }}
                >
                  <span>{artist.name}</span>
                  <span className="underline"></span>
                </button>
              </li>
            );
          })}
        </ul>
        <div className={"divide-y border rounded-md shadow-md w-336 h-208"}>
          <IndividualArtist artist={lineup[currentArtist]} />
        </div>
      </div>
    </section>
  );
};

export default Artists;
