import { AvatarProfile } from '@/components/profile-avatar';
import { ProjectCard } from '@/components/project-card';

export default function Home() {
  return (
    <main className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto px-16 space-y-10 mb-10">
      <div className="md:flex mb-10 md:mb-0 md:h-96 items-center space-y-8">
        <AvatarProfile className="h-32 w-32 lg:w-48 lg:h-48 mx-auto" />

        <div className="w-64 mx-auto">
          <h2 className="text-2xl font mb-2 font-bold">Hello, I am Gabriel!</h2>
          <p>
            Software developer, engineering student and passionate about tech
            and inovation
          </p>
        </div>
      </div>

      <div className="text-justify">
        <h4 className="text-xl font-semibold mb-4">Who am I?</h4>
        <p>
          I am a brazilian software developer, currently studying
          Telecommunication Engineering at the{' '}
          <a
            href="https://www.ifsc.edu.br/"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Federal Institute of Santa Catarina
          </a>
          (IFSC). I am passionate about technology and innovation, and I am
          always looking for new things to learn.
        </p>
      </div>

      <div id="projects" className="space-y-4 spa">
        <h4 className="text-xl font-semibold">Projects</h4>

        <div className="xl:flex block xl:gap-4 space-y-4 xl:space-y-0">
          <ProjectCard
            title="leaflet-with-react"
            image="/leaflet-with-react.png"
            link="https://gabrielluizep.github.io/leaflet-with-react/"
            description="A project to learn how to use Leaflet with React focusing in Heatmap and Clusters"
          />

          <ProjectCard
            title="minecraft-react"
            image="/minecraft-react.png"
            link="https://minecraft.gabrielluizep.dev/"
            description="A Minecraft Clone made with React and TypeScript"
          />

          <ProjectCard
            title="discord-clone"
            image="/discord-clone.png"
            link="https://github.com/gabrielluizep/discord-clone"
            description="A Discord Clone made with NextJS and TypeScript"
          />
        </div>
      </div>

      <div className="space-y-4 text-justify">
        <h4 className="text-xl font-semibold">My journey</h4>
        <p>
          My journey in tech started very young, I always has been fascinated
          for computers and programs, I started learning image and video editing
          for fun and applying that knowledge at my dad's car repair shop. As I
          grew up, I started to learn about programming to create a website for
          my family's business, and I fell in love with it. Since then, I have
          been seeking to learn more and more about programming and technology.
        </p>

        <p>
          In 2017, I started my technical course in telecommunications during
          high school, where I learned about electronics, networking and had
          some formal contact with programming. After some learning I was able
          to land a job as a repair technician at{' '}
          <a
            href="https://www.intelbras.com/"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Intelbras
          </a>
          . I learned a lot about electronics and about the work environment in
          general, but my goal was always to work with development. After some
          time, the oportunity showed up, also at Intelbras, and I was able to
          start working at the R&D department, where I was more exposed to the
          development world. In there I tested hardware and software, beeing in
          contact directly with the manufacturers. With a new project emerging
          in the department, I was able to start working with frontend
          development, using React, then I understood what I really liked to
          work with, creating stuff.
        </p>

        <p>
          I learned a lot, the project was very sucessfull the team grew and I
          was able to participate in the hiring and training process, but then
          shortly after I was invited to work at{' '}
          <a
            href="https://webautomacao.net/"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Web Automação e Tecnologia
          </a>{' '}
          to develop a new project, and I accepted the challenge. In there I
          developed not only the frontend but the backend and the mobile app, it
          was really challenging to learn all that stuff in a short period of
          time, but with help of my team I was able to do it. I learned a lot.
        </p>

        <p>
          At the end of 2023, I participated in a selection process to work at{' '}
          <a
            href="https://www.labware.com/"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            LabWare
          </a>
          , and I was accepted. Alongside with the LabWare process I was also in
          a exchange program process to study abroad, shortly after I was
          accepted at LabWare I was also accepted at the exchange program, and I
          had to choose between the two. With a heavy heart I decided to focus
          on the exchange program, because it was a dream of mine to go abroad.
        </p>

        <p>
          I had a big time in the exchange program, met a lot of people and got
          to know many cultures, and also took the oportunity to travel.
        </p>

        <p>
          After that experience, I am back to Brazil, currently working in a R&D
          project at IFSC in partnership with{' '}
          <a
            href="https://www.engie.com.br/"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Engie
          </a>{' '}
          in a project of AI applied to energy efficiency.
        </p>
      </div>
    </main>
  );
}
