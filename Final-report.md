# Music Blocks v4 Project Builder Integration

## Final Work Report for the Google Summer of Code 2024 under `Sugar Labs` for the Music Blocks v4 project

<p align="center">
<img src="https://github.com/user-attachments/assets/8d30793e-af8c-4ea3-af39-914392df416e" height="300px">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

## Contributor Info

<div container>
<table>

<tr>
<td width="600px">
&#8226; Name - Karan Palan <br />
&#8226; Organization - <a href="https://github.com/sugarlabs" target="_blank">Sugar Labs</a><br />
&#8226; Email - <a href="mailto:karanpalan007@gmail.com" target="_blank">karanpalan007@gmail.com</a><br />
&#8226; GitHub - <a href="https://github.com/karan-palan" target="_blank">karan-palan</a><br />
&#8226; Linkedin - <a href="https://www.linkedin.com/in/karan-palan-476472289/" target="_blank">Karan Palan</a><br />
&#8226; Twitter - <a href="https://x.com/Karan_Palan7" target="_blank">Karan_Palan7</a><br />
&#8226; Musicblocks.net - <a href="https://musicblocks.net/author/karanpalan007/" target="_blank">karanpalan007</a><br />
</td>
<td>
<a href="https://github.com/karan-palan"><img src="https://media.licdn.com/dms/image/v2/D5603AQFd4DwGD9a1Ig/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718489510177?e=1730937600&v=beta&t=DDGAvTzZSVJQVJjI5ZnCR8wO4qtnGLGjd01vKmxx_IU" height="250px" width="250px;" alt="Niloy Sikdar"/></a>
</td>
</tr>
</table>
</div>

## Mentors' Info

- **Mentor:** [Anindya Kundu](https://github.com/meganindya)

- **Assisting Mentor:** [Walter Bender](https://github.com/walterbender)

<br />

## Project Details

The [**Music Blocks v4**](https://github.com/sugarlabs/musicblocks-v4) project is “_a complete overhaul of the original Music Blocks project_”, which was derived from the [Turtle Blocks](https://github.com/sugarlabs/turtleblocksjs) project. The existing implementation ([Music Blocks](https://github.com/sugarlabs/musicblocks)), which started in 2015 using native Vanilla JavaScript, lacks modern front-end tooling and ecosystem standards, leading to difficulties in maintenance and subpar performance. The v4 project uses improved application architecture, modern tools (such as Vite, ESLint, Prettier, Docker, Jest, Cypress, etc._), better languages (_TypeScript and Sass_), and libraries (_React for UI rendering_). This will significantly enhance the overall developer and user experience, maintainability, and performance. The project focuses on implementing one of the main features of Music Blocks, the "**Masonry Framework**", which is currently missing in the new version (v4). The Masonry Framework is a graphical block manager module which is used to create Music Blocks programs, including interactive blocks like _Start, Rhythm, Note, Pitch, Instrument_, and many more. These blocks can be dragged, dropped, and clicked to perform actions. By implementing the Masonry Framework, users will be able to create different musical patterns seamlessly. This will bring the v4 project on par with the capabilities of the old version and provide a more accessible, efficient, and user-friendly application for users to create music through an interactive web application.

<br />

## GSoC Project Page

- [GSoC 2024 with Sugar Labs - Music Blocks v4](https://summerofcode.withgoogle.com/programs/2024/projects/5g3Db6sI)

## GSoC Project Proposal

- [Project Proposal](https://github.com/Karan-Palan/GSoC-2024/blob/main/KaranGSoCAcceptedProp.pdf)

## Project Repository

- [sugarlabs/musicblocks-v4](https://github.com/sugarlabs/musicblocks-v4)

## GSoC Blogs

- [GSoC 2024 with Sugar Labs | Week 1 and 2 | Music Blocks (v4) project updates](https://musicblocks.net/2024/06/19/gsoc-2024-with-sugar-labs-community-bonding-week-1-2-music-blocks-v4-project-updates/)
- [GSoC 2024 with Sugar Labs | Week 3 and 4 | Music Blocks (v4) project updates](https://musicblocks.net/2024/06/27/gsoc-2024-with-sugar-labs-week-3-4-music-blocks-v4-project-updates/)
- [GSoC 2024 with Sugar Labs | Week 5 and 6 | Music Blocks (v4) project updates](https://musicblocks.net/2024/07/11/gsoc-2024-with-sugar-labs-week-5-6-music-blocks-v4-project-updates/)
- [GSoC 2024 with Sugar Labs | Week 7,8 and 9 | Music Blocks (v4) project updates](https://musicblocks.net/2024/07/30/gsoc-2024-with-sugar-labs-week-78-9-music-blocks-v4-project-updates/)
- [GSoC 2024 with Sugar Labs | Week 10 and 11 | Music Blocks (v4) project updates](https://musicblocks.net/2024/09/06/gsoc-2024-with-sugar-labs-week-10-and-11-music-blocks-v4-project-updates/)
    

<br />

## Work Summary

Code can be found in branch [gsoc-2024/week-11-12](https://github.com/sugarlabs/musicblocks-v4/tree/gsoc-2024/week-11-12/modules/masonry).
Commits can be found [here](https://github.com/sugarlabs/musicblocks-v4/compare/develop...gsoc-2024/week-11-12).

## Pull Requests

| Title                                                                                                    | Link                                                         | Lines of Code Changed |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | --------------------- |
| Add design document for Masonry (previously Project-builder/code-builder)                                | [#404](https://github.com/sugarlabs/musicblocks-v4/pull/404) | `+1,475  −0`          |
| docs(masonry): add PRD and DFD                                                                           | [#408](https://github.com/sugarlabs/musicblocks-v4/pull/408) | `+972  −0`            |
| feat(masonry): create tech-spec and add demo workspace and render stack of bricks                        | [#409](https://github.com/sugarlabs/musicblocks-v4/pull/409) | `+4,716 −513`         |
| feat(masonry): create tree for the stack of bricks                                                       | [#410](https://github.com/sugarlabs/musicblocks-v4/pull/410) | `1,554 −276`          |
| feat(masonry) : Fix errors in Brick and render storybook                                                 | [#411](https://github.com/sugarlabs/musicblocks-v4/pull/411) | `+2,318 −29`          |
| feat(masonry) : Render dummy Stack of Bricks                                                             | [#412](https://github.com/sugarlabs/musicblocks-v4/pull/412) | `+1,818 −4,806`       |
