
import './project.scss';
import Slider from 'infinite-react-carousel';
import { v4 as uuidv4 } from 'uuid';

export default function Project() {
    const data = [
        {
            id: '1',
            icon: 'data:image/png;base64,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',
            linkSite: 'https://himalyausa-clone.netlify.app/',
            linkGithub: 'https://github.com/ritesh-2124/Himalaya-clone',
            linkBlog:
                'https://medium.com/@sakshirai727/cloning-of-the-himalaya-website-5dff1b761237',
            title: 'Himalyausa',
            desc: 'Himalyausa.com is a leading provider of herbal and beauty products worldwide, offering ordering services through localized websites.',
            img: 'himalya.png',
        },
        {
            id: '2',
            icon: 'data:image/png;base64,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',
            linkSite: 'https://gymshark-team-shark.vercel.app/',
            linkGithub: 'https://github.com/Aniket-Pilankar/Gymshark_FRONTEND_Unit4',
            linkBlog:
                'https://medium.com/@deeptange/how-we-build-a-clone-of-the-gymshark-com-website-f9ea841b45db',
            title: 'GymShark',
            desc: 'GymShark is a U.S. website of every type of Sportswear for men and women.',
            img: 'gymshark.jpg',
        },
        {
            id: '3',
            icon: 'data:image/jpeg;base64,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',
            linkSite: 'https://our-hotstar-project-vijendrasaini.vercel.app/',
            linkGithub: 'https://github.com/abhich21/Hotstar-Clone',
            linkBlog:
                'https://medium.com/@prsjwaldhoble2000/clone-of-website-hotstar-b6794bbc1e7d',
            title: 'Hotstar',
            desc: 'Hotstar is a OTT platform where you can watch movies, webseries, tv, songs and many more.',
            img: 'hotstar.png',
        },
        {
            id: '1',
            icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOUAAACBCAMAAAAIco1oAAAAxlBMVEX////7x6b62cYAZ2j///0AYmP8//8AbGxOiYsAXF0AZ2YAYGIAV1js9PQAZGYAYWDz/PyGsLGjyMl8qanH3NywzMxgmplekpOStrnB3t4Qc3AlbG1ZjIxvnp/P4eNFf4Df8vH0cR/i6+v0aw1ChYW70dEzfn4vdnedv8CFsrlllptsnKVJhY388un79/P84srxqoD4uJP5ybHzgUH2XgD1l2T4fjz1z7jxdyH4jVX3oXfydSv96dfvhkP/6d8ATVKu1tkARUSOgLkNAAAJDUlEQVR4nO2aC3ebOBbH5SBkXgJhno4NJhgbJl27dRI3m9qTTr//l9or8TB207PNbE3nnNUvpzV6gPTX4+pKgJBEIpFIJBKJRCKRSCQSiUQikUgkEolEIpFIJBKJRPL/DCb9AGpC5M28v6xMzP/hq5bRp1NzUeZ1VfLmhDIGk4kRFbBaJmZ16NoiEWlLHAa2XnA80bqIJiKU0CuX6t//cZ9fuYw+TFVt29bDOkQjB0LmnOKLCftrycMP7h//unZT9mCGApgnlYqhOHOKNturjSiMgvjeiz/413n8W7yhUrc89vHT5mpFYrRy790gSa9WwnecVPKuo3N9VibZZrd8uKadpUmSJ/dXN3EnQKXRqsSYVfF0+7p7fNpvt+9a0MBW58DPZqdxUg04LXt9KZp283G3/7xcPr4+v77vOWCdtUXBfjo/qdfMgeAqbVX3oNDNzW7/+O8l8PL6vN+8rxZU01XH+EmVfNjgAWViZthm6U23N7uXu+XT8u7ubnm32zwvR+98ENVUxR7/fF+Kwt9Zxt+HqWaSvo72hyVXyDV+udns7g7vHLB/S+VwMCdgu8c7IRHG6uHTZvv8uFzu3vucf65KPmJYdvP5qZZ4ePn0cbPZQa8u92Jzwi0EARD3O2ljE4XTKyBgVtM0p8JsnVSK6JxHE2F3eRzjF7RLGtTyYP43Ev24POxHN8fjw5cDhMD6ID+uqjhFeey6XkZ8d65F3PbnVaRF3orAnakblWPDHhduflLZRhu3WpyzcA1UILyC3zKcutrt2BiPtWpAHxZj2Ps8gKqn5Z+j181xtP9cK96/IuJaqmlNkD8zza/TWHFMx1E1Nl3zX0eZwJ2eZYILbNiqs0h7Kj3LgWjFNnUtD3RV1TWKaKEbqjV16zsU1SmyAQ0sIs8HPheP2+PuT76E3B2gVz+xvyhydcMQKg3DCB0blhtw/cKxyX0IuM4Qci1jNpspoMhcZKcRm1iKiAZ3OGIh5FcnaKLbcDPx6jtURdGLAR0ftHl5Ao2bh31rYblkmhRcpaIIlQrU07THDnceHNtUVBV0WwFCcTLx03SlmYZiBieVbhJAdFCYkN3PQK05Z4VpGLOUxE0StIA1HVDlw9Pnj5vRy7I1sTBy6aSw5j2V4AGq64nv2cJHSvygVA1Fd2GM1kYoH/MgaVXiJjod24pe8cfY4790GAcuwbWdEi2nx8OJxH/uNzePSyHw7rDfHXHmzlRbvVBpQ8/lBchUI6hnpYMs8JUQDRKtKMISNqQJOdlYOuHRGkgxPZQvoE1uYZqWGW8RnqSFXKU3nMrjfvPAp+Ph5cvohm+1qPYV5t2lyhIqzxIYgnygopUhVNLKsXRT12HK2c5JJXUNXXfgz66lTMRQ549C1DPaO4ZVeXwGq/oyOm7axTByvlepamCnQCXMJr4lXCmi/rFu2Pq4KAqwR6e+BNsMqTx6XKvkcxJm6BoGQQhJjrjD5t08GPh4WH464tQt2nOfiDf9pcqwU5lxlaKX8rVpqEVGab62eypTyG9GEJ2WNleJke/YhuH4MFPhwgxzytLSGFblfn/M4ltL18N64/XzKlNId7ihDCzlpJIEMK513uOBo9Qqydo2VI1imM/wBJ5U2cqQKslxtCVjC1ZC2F+KPfObKs3vVBqg0uHiKPNBRKtSGbMV5HJcSlczkYt7HmsVxjzMiMqEkRpTyo20MeS83G7BW7cvzn1+qFJpVXLjAQuIYRsL7dYx+yr9GUhQNE0BQ2yYdV82KqfQ6bZdLBTdHNbGEr6L/m8qjTdVgvUBWaqpr0OwmxGoBJfBYMTj4xK8viLUVT3hZawdk3t5GCWQBB6GnhSm2R6NDoA46XEcR9etVuXc4iGolAuT9SuotEUiVwkp37jKQHecrwliVanqujFPq1k5jhgNb9flLUPMhWjHiLK4LGcRV1nMynLObTh1S3i4ktCkvC3DIV08RAKBXx8yE1+EVgyl/DdDeTCZVCuRUsEVX/XzCVzws9R8NZn44IqnsJuCEPxw20IgOmij+cEHT8iFJkiqAp8hvl8b8mT9tNGrD+zweTRuf0jvCHrAreGvRLwGutQn/n9zVGHxskq8YugfZvbPNXH/7cNZnovGlPxCyOZh9Fu4GbQ/tze/g4837z0j/J/4fTNkyJLFAVd3iRtbcW6PRCI5r1id7cw61aaF9MwYru0X7h7eJvQ+YBgGgkj3fv1UNCZELB+EdNngH+sdt5LmCPOE0NiLIv339oyd5BMEKYOKRChzIy9tapB57WJdOwBoGtOm2zBbeVES5E1lMw9wz15b8QR31QVpBc9tA34SxV1mEiRuPuxUIcXaXXhNy05Nv2nk0Kp4vauSNuOUelbhJWYk6kpQqkde4tKLcU2MuB3WzDPdddkoI5XnOZ1/HjhJqV1X1SW5DsIyIQ2jqV23PnjWqjOBi0lXz0RsJmnKahXpOEXns00M+Nvu0Cp3ApSXbRCeH6tNU9KFC1vrIc/w+NugJGvsypnK0OX7+8miPSrhfdukcUAlzLsL83OmUqlAT9d/JE/WzWWqpogtBtx5cQJl3UymM5Wwc5ilp77kYxn3jGxqzu+j83nZV0kwS5wkMt0uf2m0U9Y3ckTmw+28avJQr74fsQlhRUlPKlW+CyHd4pGaSexOzl9x9fsSg/UJo+ZsmfBprURN0m9QKdYKr8zrmvVVMpQtimrdjljnVH9ONy/7z+qPWMTnctH7CC2wmjbJbV/MzSHJoB8nb6tE6WymtYPSVQKGSBo0YaGSnL81v1BJPN7/Ip2kjMVmo5IWH9BKH/AzGCD7pt2bSTti9VZlGHFjOv3WWh9+VrAI53rZLKipVURamJ09CvdXEujJzmAhGpWF1dmbiaU5ERqWLE6CerIR8BDyxicL6rhp+70K5u5D4q1Y7QUh6sbwRy9cGFL1vsfyu2v+UjNZnTys1JsM7Pr0qDsUox/snmtwl6kLdfcTjC4W0LeyobMnDIJwWLujgc63/k4mPyDAfXHNxyxnGbv7ReBCGznLNfhmqK07ObvuNirnmdrzIfyDI5OzPjr55+ffgQ35mbNEIpFIJBKJRCKRSCQSiUQikUgkEolEIpFIJBKJRPKP5D/BMMjxLKGOKgAAAABJRU5ErkJggg==',
            linkSite: 'https://himalyausa-clone.netlify.app/',
            linkGithub: 'https://github.com/ritesh-2124/Himalaya-clone',
            linkBlog:
                'https://medium.com/@sakshirai727/cloning-of-the-himalaya-website-5dff1b761237',
            title: 'Himalyausa',
            desc: 'Himalyausa.com is a leading provider of herbal and beauty products worldwide, offering ordering services through localized websites.',
            img: 'himalya.png',
        },
        {
            id: '2',
            icon: 'data:image/png;base64,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',
            linkSite: 'https://gymshark-team-shark.vercel.app/',
            linkGithub: 'https://github.com/Aniket-Pilankar/Gymshark_FRONTEND_Unit4',
            linkBlog:
                'https://medium.com/@deeptange/how-we-build-a-clone-of-the-gymshark-com-website-f9ea841b45db',
            title: 'GymShark',
            desc: 'GymShark is a U.S. website of every type of Sportswear for men and women.',
            img: 'gymshark.jpg',
        },
        {
            id: '3',
            icon: 'data:image/jpeg;base64,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',
            linkSite: 'https://our-hotstar-project-vijendrasaini.vercel.app/',
            linkGithub: 'https://github.com/abhich21/Hotstar-Clone',
            linkBlog:
                'https://medium.com/@prsjwaldhoble2000/clone-of-website-hotstar-b6794bbc1e7d',
            title: 'Hotstar',
            desc: 'Hotstar is a OTT platform where you can watch movies, webseries, tv, songs and many more.',
            img: 'hotstar.png',
        },
    ];

    return (
        <div className="Project" id="Project">
            <br />

            <h1>My Projects</h1>
            <hr
                style={{
                    width: 180,
                    marginTop: '-18px',
                    height: 4,
                    backgroundColor: '#18d26e',
                    border: 'none',
                }}
            />
            <br />
            <Slider
                autoplay={true}
                slidesToShow={2}
                centerMode={true}
                autoplayScroll={1}
                centerPadding={-60}
                arrows={true}
            >
                {data.map((d) => (
                    <div key={uuidv4()} className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2 style={{ color: 'crimson' }}>
                                        {d.title}
                                    </h2>
                                    <p>{d.desc}</p>
                                    <div className="button">
                                        <a
                                            href={d.linkBlog}
                                            target="blank"
                                            style={{
                                                textDecoration: 'none',
                                                color: 'white',
                                            }}
                                        >
                                            <button>Blog</button>
                                        </a>
                                        <a
                                            href={d.linkGithub}
                                            target="blank"
                                            style={{
                                                textDecoration: 'none',
                                                color: 'white',
                                            }}
                                        >
                                            <button style={{ marginLeft: 10 }}>
                                                Github
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <a href={d.linkSite} target="blank">
                                    <div>
                                        <img src={d.img} alt="" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
