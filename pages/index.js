import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  const benefits = [
    {
      title: 'Mental Focus',
      id: 1,
      description:
        'Quieting the noise in the mind enables new ways of relating to the creative process, unleashing a level of focus that is absolutely new.',
      image: '/images/focus.jpg',
    },
    {
      title: 'Creativity',
      id: 2,
      description:
        'Being able to solve problems with a refreshed perspective is the landmark of this process.',
      image: '/images/creativity.jpg',
    },
    {
      title: 'Team Building',
      id: 3,
      description:
        'Going through a process like this with team members will definitely enhance the relationships within them, seeing an important advancement in the way individuals work with each other.',
      image: '/images/joy.jpg',
    },
  ];
  const testimonials = [
    {
      title: 'Nancy Jacobsen',
      id: 1,
      position: '',
      description:
        'Working with JP brought to me a new level of understanding of what it means to be a human being, and how to relate to work (and to everything that I do), in a new level. ',
      image: '/images/testimonials/nancy.jpeg',
    },
    {
      title: 'Leah Prime',
      id: 1,
      position: '',
      description:
        'Working with JP brought to me a new level of understanding of what it means to be a human being, and how to relate to work (and to everything that I do), in a new level. ',
      image: '/images/testimonials/leah.jpeg',
    },
    {
      title: 'Jemma Jorel Lester',
      id: 1,
      position: '',
      description:
        'Working with JP brought to me a new level of understanding of what it means to be a human being, and how to relate to work (and to everything that I do), in a new level. ',
      image: '/images/testimonials/jemma.jpeg',
    },
  ];
  return (
    <div className={styles.container}>
      <Head>
        <title>Breathech</title>
        <meta
          name='description'
          content='Where breathwork meets the tech industry to catalyze creativity in your team.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <div className={styles.firstElement}>
          <div className={styles.leftContainer}>
            <h1>This is where breathwork meets the tech industry.*</h1>
            <small>*To catalyze new ways of innovation.</small>
          </div>
          <div className={styles.rightContainer}></div>
        </div>
        <div className={styles.secondElement}>
          <h2>Benefits</h2>
          <div className={styles.benefitsContainer}>
            {benefits.map(benefit => (
              <div key={benefit.id} className={styles.individualBenefit}>
                <h3>{benefit.title}</h3>
                <div className={styles.benefitImageContainer}>
                  <Image
                    src={benefit.image}
                    fill
                    alt={`Benefit ${benefit.description}`}
                  />
                </div>

                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.thirdElement}>
          <h2>Testimonials</h2>
          <div className={styles.benefitsContainer}>
            {testimonials.map(test => (
              <div key={test.id} className={styles.individualTestimony}>
                <h3>{test.title}</h3>
                <div className={styles.benefitImageContainer}>
                  <Image src={test.image} fill alt={`Benefit ${test.image}`} />
                </div>

                <p>{test.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.fourthElement}>
          <h2>Work with me</h2>
          <p>
            If you want to take your team to the next level and unleash a level
            of creativity and belonging that you cannot think is possible right
            now, contact me at jpfraneto@gmail.com.
          </p>
          <br />
          <p>
            I&apos;m here to help you make the world a better place, one breath
            at a time.
          </p>
        </div>
      </main>
    </div>
  );
}
