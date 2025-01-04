# Masonry Framework Tech Spec

This tech spec outlines the implementation details for the Masonry Framework, a core component of the MusicBlocks V4 project built with React and TypeScript.

## Project Structure

```
├── src
│   ├── utils
│   │   ├── dragAndDropUtils.ts
│   │   ├── validationUtils.ts
│   │   ├── dataUtils.ts
│   │   ├── quadtreeUtils.ts
│   │   └──...
│   ├── components
│   │   ├── brick
│   │   │   ├── Brick.tsx
│   │   │   ├── BrickInput.tsx
│   │   │   ├── BrickOutput.tsx
│   │   │   ├── DataBrick.tsx
│   │   │   ├── ExpressionBrick.tsx
│   │   │   ├── StatementBrick.tsx
│   │   │   ├── BlockBrick.tsx
│   │   │   └──...
│   │   ├── palette
│   │   │   ├── Palette.tsx
│   │   │   ├── PaletteCategory.tsx
│   │   │   └── PaletteSearch.tsx
│   │   ├── workspace
│   │   │   ├── Workspace.tsx
│   │   │   ├── WorkspaceGrid.tsx
│   │   │   ├── WorkspaceToolbar.tsx
│   │   │   └──...
│   ├── hooks
│   │   ├── useBrick.ts
│   │   ├── useStack.ts
│   │   ├── useWorkspace.ts
│   │   └──...
│   ├── models
│   │   ├── Brick.ts
│   │   ├── Stack.ts
│   │   ├── Workspace.ts
│   │   └──...
│   ├── services
│   │   ├── BrickService.ts
│   │   ├── StackService.ts
│   │   ├── WorkspaceService.ts
│   │   ├── QuadtreeService.ts
│   │   ├── ErrorHandlingService.ts
│   │   └──...
│   ├── App.tsx
│   └── index.tsx
├──...
```

## Dependencies

- React
- TypeScript
- React-aria (for drag-and-drop functionality)
- ... (other relevant libraries)

## Description

### Components

#### a) Brick

- **Brick.tsx:**
  - Properties:
    - `brick`: The brick model instance.
    - `onDragStart`: Callback for drag start event.
    - `onDragOver`: Callback for drag-over event.
    - `onDrop`: Callback for drop event.
    - `onDragEnd`: Callback for drag end event.
    - `onClick`: Callback for click event.
    - `onDoubleClick`: Callback for double-click event.
    - `onContextMenu`: Callback for context menu event.
    - `onInputChange`: Callback for input change event.
    - `onOutputChange`: Callback for output change event.
  - Functions:
    - `render()`: Renders the brick component with its visual appearance and input/output ports.
    - `handleDragStart()`: Handles the drag start event for the brick.
    - `handleDragOver()`: Handles the drag-over event for the brick.
    - `handleDrop()`: Handles the drop event for the brick.
    - `handleDragEnd()`: Handles the drag end event for the brick.
    - `handleClick()`: Handles the click event for the brick.
    - `handleDoubleClick()`: Handles the double-click event for the brick.
    - `handleContextMenu()`: Handles the context menu event for the brick.
    - `handleInputChange()`: Handles the input change event for the brick.
    - `handleOutputChange()`: Handles the output change event for the brick.
- **BrickInput.tsx:**
  - Properties:
    - `brick`: The brick model instance.
    - `onConnect`: Callback for connect event.
    - `onDisconnect`: Callback for disconnect event.
  - Functions:
    - `render()`: Renders the input port of the brick.
    - `handleConnect()`: Handles the connect event for the input port.
    - `handleDisconnect()`: Handles the disconnect event for the input port.
- **BrickOutput.tsx:**
  - Properties:
    - `brick`: The brick model instance.
    - `onConnect`: Callback for connect event.
    - `onDisconnect`: Callback for disconnect event.
  - Functions:
    - `render()`: Renders the output port of the brick.
    - `handleConnect()`: Handles the connect event for the output port.
    - `handleDisconnect()`: Handles the disconnect event for the output port.
- **DataBrick.tsx:**
  - Properties:
    - `brick`: The brick model instance.
    - `onInputChange`: Callback for input change event.
    - `onOutputChange`: Callback for output change event.
  - Functions:
    - `render()`: Renders the data brick component with its visual appearance and input/output ports.
    - `handleInputChange()`: Handles the input change event for the data brick.
    - `handleOutputChange()`: Handles the output change event for the data brick.
- **ExpressionBrick.tsx:**
  - Properties:
    - `brick`: The brick model instance.
    - `onInputChange`: Callback for input change event.
    - `onOutputChange`: Callback for output change event.
  - Functions:
    - `render()`: Renders the expression brick component with its visual appearance and input/output ports.
    - `handleInputChange()`: Handles the input change event for the expression brick.
    - `handleOutputChange()`: Handles the output change event for the expression brick.
- **StatementBrick.tsx:**
  - Properties:
    - `brick`: The brick model instance.
    - `onInputChange`: Callback for input change event.
    - `onOutputChange`: Callback for output change event.
  - Functions:
    - `render()`: Renders the statement brick component with its visual appearance and input/output ports.
    - `handleInputChange()`: Handles the input change event for the statement brick.
    - `handleOutputChange()`: Handles the output change event for the statement brick.
- **BlockBrick.tsx:**
  - Properties:
    - `brick`: The brick model instance.
    - `onInputChange`: Callback for input change event.
    - `onOutputChange`: Callback for output change event.
    - `children`: An array of nested brick instances.
  - Functions:
    - `render()`: Renders the block brick component with its visual appearance and input/output ports.
    - `handleInputChange()`: Handles the input change event for the block brick.
    - `handleOutputChange()`: Handles the output change event for the block brick.
    - `handleNesting()`: Handles the nesting logic for nested bricks.
    - `handleArguments()`: Manages the arguments for block bricks.

#### b) Palette

- **Palette.tsx:**
  - Properties:
    - `bricks`: An array of brick model instances.
    - `onDragStart`: Callback for drag start event.
    - `onDragOver`: Callback for drag-over event.
    - `onDrop`: Callback for drop event.
    - `onSearch`: Callback for search event.
    - `searchQuery`: The current search query.
  - Functions:
    - `render()`: Renders the palette component with its visual appearance and categories.
    - `handleDragStart()`: Handles the drag start event for the palette.
    - `handleDragOver()`: Handles the drag-over event for the palette.
    - `handleDrop()`: Handles the drop event for the palette.
    - `handleSearch()`: Handles the search event for the palette.
- **PaletteCategory.tsx:**
  - Properties:
    - `category`: The category model instance.
    - `bricks`: An array of brick model instances.
  - Functions:
    - `render()`: Renders the category component with its visual appearance and bricks.
- **PaletteSearch.tsx:**
  - Properties:
    - `searchQuery`: The current search query.
    - `onSearch`: Callback for search event.
  - Functions:
    - `render()`: Renders the search component with its visual appearance and input field.
    - `handleSearch()`: Handles the search event for the search component.

#### c) Workspace

- **Workspace.tsx:**
  - Properties:
    - `workspace`: The workspace model instance.
    - `onBrickAdd`: Callback for brick add event.
    - `onBrickRemove`: Callback for brick remove event.
    - `onBrickConnect`: Callback for brick connect event.
    - `onBrickDisconnect`: Callback for brick disconnect event.
    - `onBrickMove`: Callback for brick move event.
    - `onBrickResize`: Callback for brick resize event.
    - `onBrickRotate`: Callback for brick rotate event.
    - `onUndo`: Callback for undo event.
    - `onRedo`: Callback for redo event.
  - Functions:
    - `render()`: Renders the workspace component with its visual appearance and bricks.
    - `handleBrickAdd()`: Handles the brick add event for the workspace.
    - `handleBrickRemove()`: Handles the brick remove event for the workspace.
    - `handleBrickConnect()`: Handles the brick connect event for the workspace.
    - `handleBrickDisconnect()`: Handles the brick disconnect event for the workspace.
    - `handleBrickMove()`: Handles the brick move event for the workspace.
    - `handleBrickResize()`: Handles the brick resize event for the workspace.
    - `handleBrickRotate()`: Handles the brick rotate event for the workspace.
    - `handleUndo()`: Handles the undo event for the workspace.
    - `handleRedo()`: Handles the redo event for the workspace.
- **WorkspaceGrid.tsx:**
  - Properties:
    - `gridSize`: The size of the grid.
    - `onGridClick`: Callback for grid click event.
  - Functions:
    - `render()`: Renders the grid component with its visual appearance and grid lines.
    - `handleGridClick()`: Handles the grid click event for the grid component.
- **WorkspaceToolbar.tsx:**
  - Properties:
    - `onUndo`: Callback for undo event.
    - `onRedo`: Callback for redo event.
  - Functions:
    - `render()`: Renders the toolbar component with its visual appearance and buttons.
    - `handleUndo()`: Handles the undo event for the toolbar.
    - `handleRedo()`: Handles the redo event for the toolbar.

### Utilities

- **dragAndDropUtils.ts:**
  - Functions:
    - `handleDragStart()`: Handles the drag start event for draggable elements.
    - `handleDragOver()`: Handles the drag-over event for draggable elements.
    - `handleDrop()`: Handles the drop event for draggable elements.
    - `handleDragEnd()`: Handles the drag end event for draggable elements.
- **validationUtils.ts:**
  - Functions:
    - `validateBrickConnection()`: Validates the connection between two bricks.
    - `validateBrickPosition()`: Validates the position of a brick in the workspace.
    - `validateBrickData()`: Validates the data within a brick.
- **dataUtils.ts:**
  - Functions:
    - `saveWorkspace()`: Saves the workspace state to local storage or server.
    - `loadWorkspace()`: Loads the workspace state from local storage or server.
    - `exportWorkspace()`: Exports the workspace state to a file.
    - `importWorkspace()`: Imports the workspace state from a file.
- **quadtreeUtils.ts:**
  - Functions:
    - `insertBrick()`: Inserts a brick into the quadtree for spatial indexing.
    - `removeBrick()`: Removes a brick from the quadtree.
    - `updateBrick()`: Updates the position of a brick in the quadtree.
    - `findNearbyBricks()`: Finds nearby bricks within a certain radius using the quadtree.

### Hooks

**a) useBrick:**

- A hook for managing a single brick.
- Provides an instance of the `Brick` model.
- Handles updating the brick's properties and arguments.
- Properties:
  - `brick`: The brick model instance.
  - `setBrick()`: A function to update the brick instance.
- Functions:
  - `useEffect()`: A React hook for handling side effects.
    - `fetchBrick()`: A function to fetch the brick data from the server.
  - `useCallback()`: A React hook for memoizing functions.
    - `handleInputChange()`: A function to handle input changes for the brick.
    - `handleOutputChange()`: A function to handle output changes for the brick.

**b) useStack:**

- A hook for managing a stack of bricks.
- Provides an instance of the `Stack` model.
- Handles updating the stack's bricks and connections.
- Properties:
  - `stack`: The stack model instance.
  - `setStack()`: A function to update the stack instance.
- Functions:
  - `useEffect()`: A React hook for handling side effects.
    - `fetchStack()`: A function to fetch the stack data from the server.
  - `useCallback()`: A React hook for memoizing functions.
    - `handleBrickAdd()`: A function to handle adding a brick to the stack.
    - `handleBrickRemove()`: A function to handle removing a brick from the stack.
    - `handleBrickConnect()`: A function to handle connecting bricks in the stack.
    - `handleBrickDisconnect()`: A function to handle disconnecting bricks in the stack.

**c) useWorkspace:**

- A hook for managing the workspace state.
- Provides an instance of the `Workspace` model.
- Handles updating the workspace's bricks, connections, and layout.
- Properties:
  - `workspace`: The workspace model instance.
  - `setWorkspace()`: A function to update the workspace instance.
- Functions:
  - `useEffect()`: A React hook for handling side effects.
    - `fetchWorkspace()`: A function to fetch the workspace data from the server.
  - `useCallback()`: A React hook for memoizing functions.
    - `handleBrickAdd()`: A function to handle adding a brick to the workspace.
    - `handleBrickRemove()`: A function to handle removing a brick from the workspace.
    - `handleBrickConnect()`: A function to handle connecting bricks in the workspace.
    - `handleBrickDisconnect()`: A function to handle disconnecting bricks in the workspace.
    - `handleBrickMove()`: A function to handle moving a brick in the workspace.
    - `handleBrickResize()`: A function to handle resizing a brick in the workspace.
    - `handleBrickRotate()`: A function to handle rotating a brick in the workspace.

### Models

Certainly! Below, I'll expand on the properties and functionalities of the `Brick` model to include bounding boxes (b-boxes) and related methods:

### Models

- **Brick.ts:**
  - Properties:
    - `id`: Unique identifier for the brick.
    - `type`: Type of the brick (data, expression, statement, block).
    - `position`: Position of the brick in the workspace.
    - `inputs`: Array of input ports for the brick.
    - `outputs`: Array of output ports for the brick.
    - `data`: Data associated with the brick.
    - `boundingBox`: Bounding box coordinates of the brick for collision detection and spatial indexing.
  - Functions:
    - `connect()`: Connects the brick to another brick.
    - `disconnect()`: Disconnects the brick from another brick.
    - `move()`: Moves the brick to a new position.
    - `resize()`: Resizes the brick.
    - `rotate()`: Rotates the brick.
    - `calculateBoundingBox()`: Calculates the bounding box of the brick based on its size and position.
    - `checkCollision()`: Checks for collision with other bricks or boundaries.
    - `handleCollision()`: Handles collision events by adjusting the position or behavior of the brick.
    - `updatePosition()`: Updates the position of the brick based on collision resolution or user interaction.

- **Stack.ts:**
  - Properties:
    - `id`: Unique identifier for the stack.
    - `bricks`: Array of bricks in the stack.
  - Functions:
    - `addBrick()`: Adds a brick to the stack.
    - `removeBrick()`: Removes a brick from the stack.
    - `connectBricks()`: Connects two bricks in the stack.
    - `disconnectBricks()`: Disconnects two bricks in the stack.
- **Workspace.ts:**
  - Properties:
    - `id`: Unique identifier for the workspace.
    - `stacks`: Array of stacks in the workspace.
    - `gridSize`: Size of the grid in the workspace.
    - `zoomLevel`: Zoom level of the workspace.
  - Functions:
    - `addStack()`: Adds a stack to the workspace.
    - `removeStack()`: Removes a stack from the workspace.
    - `findBrickById()`: Finds a brick in the workspace by its ID.
    - `validateWorkspace()`: Validates the workspace state.
    - `exportWorkspace()`: Exports the workspace state to a file.
    - `importWorkspace()`: Imports the workspace state from a file.

### Services

- **BrickService.ts:**
  - Functions:
    - `createBrick()`: Creates a new brick instance.
    - `deleteBrick()`: Deletes a brick instance.
    - `updateBrick()`: Updates a brick instance.
    - `findBrickById()`: Finds a brick instance by its ID.
- **StackService.ts:**
  - Functions:
    - `createStack()`: Creates a new stack instance.
    - `deleteStack()`: Deletes a stack instance.
    - `updateStack()`: Updates a stack instance.
    - `findStackById()`: Finds a stack instance by its ID.
- **WorkspaceService.ts:**
  - Functions:
    - `createWorkspace()`: Creates a new workspace instance.
    - `deleteWorkspace()`: Deletes a workspace instance.
    - `updateWorkspace()`: Updates a workspace instance.
    - `findWorkspaceById()`: Finds a workspace instance by its ID.
- **QuadtreeService.ts:**
  - Functions:
    - `insertBrick()`: Inserts a brick into the quadtree for spatial indexing.
    - `removeBrick()`: Removes a brick from the quadtree.
    - `updateBrick()`: Updates the position of a brick in the quadtree.
    - `findNearbyBricks()`: Finds nearby bricks within a certain radius using the quadtree.
- **ErrorHandlingService.ts:**
  - Functions:
    - `handleError()`: Handles errors and exceptions in the application.
    - `logError()`: Logs errors to a server or local storage.

## Testing

- Write unit tests for components, utilities, and hooks using Jest and React Testing Library.
- Write integration tests for drag-and-drop functionality and state management.
- Write end-to-end tests for the overall workflow using Cypress or Selenium.
