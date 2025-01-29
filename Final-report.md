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
<a href="https://github.com/karan-palan"><img src="https://media.licdn.com/dms/image/v2/D5603AQFd4DwGD9a1Ig/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718489510177?e=1730937600&v=beta&t=DDGAvTzZSVJQVJjI5ZnCR8wO4qtnGLGjd01vKmxx_IU" height="250px" width="250px;" alt=""/></a>
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

## YouTube Streams

- [GSoC+DMP contributors initial check-in 1 of 2: Music Blocks projects](https://www.youtube.com/live/PeIS3gXPFj0?si=6ANGqYKI07T1xgun&t=2366)
- [GSoC+DMP contributors final presentation: Music Blocks and Sugar projects](https://www.youtube.com/live/0yMqz3GW3rY?si=Rionjb9AH0BMY4ux&t=3328)

<br />

## Work Summary

### **1. Creating the Design Document**

At the outset of my project, I focused on establishing a strong foundation by creating a comprehensive design document that consisted of a [Product Requirements Document (PRD)](https://github.com/sugarlabs/musicblocks-v4/blob/gsoc-2024/week-11-12/modules/masonry/docs/functional-specification/PRD.md), a [Data Flow Diagram (DFD)](https://github.com/sugarlabs/musicblocks-v4/blob/gsoc-2024/week-11-12/modules/masonry/docs/architecture/MasonryDFD.drawio.png), and an initial technical specification. The PRD outlined the different types of bricks — Data, Expression, Statement, and Block — and described their individual characteristics, such as appearance, interaction methods, and connection points. I also defined how these bricks would function within the Music Blocks environment, considering their color coding, input/output ports, labels, and interactive elements.

In addition, I developed a DFD to illustrate the interactions between the various components of the Masonry framework, such as the bricks, the palette, the workspace, and the stack of bricks. This diagram helped visualize the flow of information and the relationships between different modules, serving as a roadmap for further development.

   <img src="https://github.com/user-attachments/assets/dd5bf1b8-769c-4206-9b3a-d160365996f7" width="650px" />

The initial technical specification was drafted to guide the implementation process. However, as the project evolved and requirements became clearer, I revised this document to better align with the overall objectives. These documents were instrumental in ensuring that all community members were aligned on the framework's goals, requirements, and design principles. They also provided a clear blueprint for the development process, which helped keep the project on track and focused.

### **2. Prototyping Different Brick Stack Approaches**

One of the early challenges I faced was determining the best method for representing and manipulating the bricks in the workspace. To explore different possibilities, I developed three prototypes:

- **SVG Bricks**: I first experimented with creating bricks using scalable vector graphics (SVG). This approach offered flexibility in terms of design and scaling but had some limitations in terms of integrating with HTML elements.
  
- **Div Bricks**: Next, I created a prototype using HTML div elements styled with CSS. While this method provided good compatibility across browsers, it lacked the scalability and flexibility needed for a dynamic visual programming environment.
  
- **SVG Bricks with Foreign Object Elements**: Finally, I explored combining SVG elements with HTML using the foreign object element. This approach allowed me to integrate richer content and interactivity within the SVG canvas, making it easier to manipulate bricks with advanced features like drag-and-drop, inline text editing, and context menus.

  <img src="https://github.com/user-attachments/assets/06773e94-dd79-4ba7-ab5f-a22c51d78fd8" width="400px" />
  <img src="https://github.com/user-attachments/assets/a4f2cc14-703d-43a0-b063-35d8fdb3d12a" width="400px" />

After thorough testing and evaluation, I decided to use the third approach — SVG with foreign object elements — due to its superior flexibility, scalability, and compatibility with the drag-and-drop functionality required for the framework. 

### **3. Rewriting Brick Components and Classes**

With the final decision on the brick representation method in place, I moved forward with rewriting the brick components and their corresponding classes to align with the finalized design. This involved:

- **Refactoring the Codebase**: I reorganized the brick classes to ensure that each type adhered to its designated properties and functionalities, such as inline text editing, and connection points. I also made sure the bricks were visually distinct, scalable, and compatible with the drag-and-drop functionality.
  
- **Fixing Bounding Box Scale Errors**: During this process, I identified and fixed several bounding box errors that were affecting the rendering of bricks in the workspace. These fixes ensured that the bricks were accurately represented and properly aligned, which was critical for creating a seamless user experience.
  
- **Integrating Storybook**: To facilitate development and testing, I integrated Storybook into the project. This tool allowed me to visually render and test each brick component in isolation, making it easier to identify and resolve issues quickly. By rendering the bricks in Storybook, I was able to verify their appearance, behavior, and interactions before integrating them into the main workspace.

**Here are some of the Storybook screenshots:**

<img src="https://github.com/user-attachments/assets/a6b549d4-4772-4e9a-b008-3ee80e173d9f" width="450px" />
<img src="https://github.com/user-attachments/assets/3033dafa-4a27-43ef-a396-5d77b3b978d6" width="450px" />
<img src="https://github.com/user-attachments/assets/3529b2e4-676f-4deb-bf31-d04f24fb426f" width="450px" />
<img src="https://github.com/user-attachments/assets/54a62848-145d-4fb4-8dcb-53cde75d1e4b" width="450px" />

### **4. Creating a Tree Structure for the Brick Stack**

To effectively manage the organization and hierarchy of bricks within the workspace, I developed a tree structure for the stack of bricks. This structure allows for a clear visual and logical representation of how bricks connect and interact, which is particularly useful for managing nested or grouped bricks. The tree-based approach supports complex programming sequences by allowing users to see the relationships between different bricks and manipulate them easily.

![image](https://github.com/user-attachments/assets/45332c84-4cd2-4108-a80c-77f86c5a59dc)

### **5. Creating a Dummy Workspace and Enabling Drag-and-Drop**

To test and refine the brick manipulation features within the Masonry framework, I created a dummy workspace that allowed for drag-and-drop functionality. This involved implementing the core mechanics for dragging bricks from the palette and dropping them onto the workspace, connecting them to other bricks, and rearranging them as needed.

By creating this test environment, I was able to validate the usability and performance of the drag-and-drop functionality. 

[Screencast from 02-09-24 03:25:42 PM IST.webm](https://github.com/user-attachments/assets/0d501226-034f-43d1-b7b4-6f0b94c04f0a)

## Pull Requests

| Title                                                                                                    | Link                                                         | Lines of Code Changed |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | --------------------- |
| Add design document for Masonry (previously Project-builder/code-builder)                                | [#404](https://github.com/sugarlabs/musicblocks-v4/pull/404) | `+1,475  −0`          |
| docs(masonry): add PRD and DFD                                                                           | [#408](https://github.com/sugarlabs/musicblocks-v4/pull/408) | `+972  −0`            |
| feat(masonry): create tech-spec and add demo workspace and render stack of bricks                        | [#409](https://github.com/sugarlabs/musicblocks-v4/pull/409) | `+4,716 −513`         |
| feat(masonry): create tree for the stack of bricks                                                       | [#410](https://github.com/sugarlabs/musicblocks-v4/pull/410) | `1,554 −276`          |
| feat(masonry) : Fix errors in Brick and render storybook                                                 | [#411](https://github.com/sugarlabs/musicblocks-v4/pull/411) | `+2,318 −29`          |
| feat(masonry) : Render dummy Stack of Bricks                                                             | [#412](https://github.com/sugarlabs/musicblocks-v4/pull/412) | `+1,818 −4,806`       |


Code can be found in branch [gsoc-2024/week-11-12](https://github.com/sugarlabs/musicblocks-v4/tree/gsoc-2024/week-11-12/modules/masonry).
Commits can be found [here](https://github.com/sugarlabs/musicblocks-v4/compare/develop...gsoc-2024/week-11-12).

## **Conclusion**

Overall, my work on the Masonry project during GSoC 2024 has involved a mix of design, prototyping, and development activities. I began by creating a solid foundation with a thorough design document, explored different implementation methods through prototyping, and iteratively developed and tested the framework's components. Throughout the project, I have documented my progress, shared my findings with the community, and refined the framework based on feedback and evolving requirements.

This experience has not only strengthened my technical skills but also provided valuable insights into the collaborative, iterative nature of open-source development. I look forward to continuing to contribute to the Music Blocks project and helping to create a more accessible and engaging visual programming environment for users around the world.



