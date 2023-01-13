import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesComponent = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#000",
                    },
                },
                fpsLimit: 120,
                pauseOnBlur: true,
                pauseOnOutsideViewport: true,
                fullScreen: {
                  enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
                  zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
                },
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                    },
                    modes: {
                        push: {
                            quantity: 3,
                        },
                        repulse: {
                            distance: 100,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#b80f0f",
                    },
                    links: {
                        color: "#b80f0f",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 2,
                    },
                    collisions: {
                        enable: false,
                    },
                    move: {
                        enable: true,
                        speed: { min: 1.5, max: 3 },
                        },
                        opacity: {
                          value: { min: 0.3, max: 0.7 }, // using a different opacity, to have some semitransparent effects
                        },
                        size: {
                          value: { min: 1, max: 3 }, // let's randomize the particles size a bit
                        },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 90,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "square",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: false,
            }}
        />
    );
};

export default ParticlesComponent;