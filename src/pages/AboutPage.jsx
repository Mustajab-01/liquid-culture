import React from 'react';

const AboutPage = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
            <div className='lg:text-center'>
                <h2
                    className={`text-3xl font-bold mb-4 gradientText drop-shadow-md`}
                >
                    About Me
                </h2>
                <p>
                    Hi there! My name is Muhammad Mustjab and I'm a 15-year-old
                    web developer. I'm passionate about creating beautiful and
                    functional websites and web applications using various
                    technologies such as HTML, CSS, JavaScript, Tailwind,
                    Bootstrap, React, Next.js, MongoDB, Mongoose, Node, and
                    Express. I'm constantly learning and expanding my skills to
                    stay up-to-date with the latest trends and technologies in
                    the industry.
                </p>
            </div>
            <div className='mt-10'>
                <h3
                    className={`text-2xl font-bold mb-4 gradientText drop-shadow-md`}
                >
                    My Expertise
                </h3>
                <p>
                    Over the years, I have gained expertise in creating
                    responsive and user-friendly websites and web applications
                    that meet my clients' needs and expectations. I have
                    experience in designing and developing custom websites from
                    scratch as well as using popular frameworks like React and
                    Next.js to build complex web applications. I also have
                    extensive knowledge of databases like MongoDB and Mongoose,
                    which I use to create dynamic and scalable web applications.
                    Additionally, I am skilled in implementing SEO best
                    practices to optimize websites for search engines.
                </p>
            </div>
            <div className='mt-10'>
                <h3
                    className={`text-xl font-bold mb-2 gradientText drop-shadow-md`}
                >
                    My Process
                </h3>
                <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-4'>
                    <div className='shadow-md p-8 rounded-md hover:shadow-xl transition hover:shadow-neutral-400'>
                        <h4
                            className={`text-xl font-bold mb-2 gradientText drop-shadow-md`}
                        >
                            Step 1: Planning
                        </h4>
                        <p>
                            In this step, I work closely with my clients to
                            understand their goals and requirements. I create a
                            detailed project plan that includes timelines,
                            milestones, and deliverables to ensure that the
                            project stays on track and meets the client's
                            expectations.
                        </p>
                    </div>
                    <div className='shadow-md p-8 rounded-md hover:shadow-xl transition hover:shadow-neutral-400'>
                        <h4
                            className={`text-xl font-bold mb-2 gradientText drop-shadow-md`}
                        >
                            Step 2: Design
                        </h4>
                        <p>
                            In this step, I create a visual design that aligns
                            with the client's brand and vision. I use tools like
                            Figma and Adobe XD to create wireframes and mockups
                            that accurately represent the final product. Once
                            the client approves the design, I move on to the
                            development phase.
                        </p>
                    </div>
                    <div className='shadow-md p-8 rounded-md hover:shadow-xl transition hover:shadow-neutral-400'>
                        <h4
                            className={`text-xl font-bold mb-2 gradientText drop-shadow-md`}
                        >
                            Step 3: Development
                        </h4>
                        <p>
                            In this step, I bring the design to life using the
                            latest web development technologies. I create clean
                            and optimized code that is easy to maintain and
                            update. I also ensure that the website or web
                            application is responsive and works seamlessly on
                            all devices and browsers.
                        </p>
                    </div>
                    <div className='shadow-md p-8 rounded-md hover:shadow-xl transition hover:shadow-neutral-400'>
                        <h4
                            className={`text-xl font-bold mb-2 gradientText drop-shadow-md`}
                        >
                            Step 4: Testing
                        </h4>
                        <p>
                            After the development phase, it's time to test the
                            project to ensure that it works as intended. This
                            involves running various tests and simulations to
                            catch any bugs or issues that may have been missed
                            during development. Testing is an important part of
                            the process as it helps to ensure that the final
                            product is of high quality and meets the client's
                            requirements.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
