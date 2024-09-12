# Challenge TRACTIAN

### Screenshot / Layout

![Screenshot](./src/assets/screenshots/Challenge%20TRACTIAN%20-%20Google%20Chrome%2012_09_2024%2011_31_01.png)

### Demo Video

![Screenshot](./src/assets/gif/Challenge-TRACTIAN-Google-Chrome-2024-09-12-11-40-00.gif)

## Developed Features
- **Hierarchical Listing of Locations, Sublocations, Assets and Components:** I structured the visualization to show the locations and their sublocations, allowing the user to have a clear view of the assets and their respective components.

- **Filter System:** I created a filter system that allows you to search by asset, component and location name, while always maintaining the original hierarchy, which I consider essential for clear navigation.

- **Dynamic Sidebar:** The sidebar offers a complete hierarchical view, where assets, sub-assets, locations and sub-locations can be navigated quickly and efficiently.

## Technologies Used
#### Frontend:
- **React:** I used React because of its ability to create interactive and scalable interfaces.
- **Vite:** I chose to use Vite as a build tool because of its speed and efficiency during development. It offers a significantly more agile development experience compared to other tools such as Webpack, especially in React projects.
- **TypeScript:** Static typing helped me avoid several errors during development time, in addition to making the code more readable.
- **Styled Components:** For styling the components, I used styled-components to keep the CSS organized and encapsulated.
- **React Router DOM:** I implemented route management with React Router to facilitate navigation between different sections of the application.
- **Axios:** I used Axios to make HTTP requests, as it offers a simpler and more intuitive API for working with promises and makes error handling easier, when compared to fetch.

#### Backend
The API used was made available by the company to access company, location and asset data. It only works for GET type requests, with the following endpoints:

1. **/companies:** Returns all registered companies.
2. **/companies/:companieId/locations:** Returns all locations associated with a specific company.
3. **/companies/:companieId/assets:** Returns all assets of a specific company.

**API Base URL:** https://fake-api.tractian.com

### Proposed Improvements

#### 1. Implementation of Automated Tests:
- **Motivation:** During development, the lack of tests was a limitation. I believe that adding automated tests (unit and integration) would be crucial to ensure the robustness of the system, especially in future evolutions.
- **Next Step:** Use Jest and React Testing Library to cover the main functionalities, ensuring that the search, hierarchical listing and rendering of the components are correct.
#### 2. State Management with Zustand:
- **Motivation:** The state is currently being managed with native React hooks. Although it works, when dealing with data from multiple companies and their hierarchies, a solution like Zustand could provide better organization and performance.
- **Next Step:** Integrate Zustand to manage the global state of the application, especially to optimize filter control and persistence of company, location and asset data. #### 3. Filter System Optimization:
- **Motivation:** The filter system works correctly, but could be optimized to apply more complex filters (e.g. by operational status, asset category, and location).
- **Next Step:** Create an advanced filter interface where the user can select multiple criteria, improving usability.
#### 4. Performance Optimization:
- **Motivation:** In large data sets, performance can be an issue. Tools like React.memo and lazy loading could be applied to improve the fluidity of the interface.
- **Next Step:** Implement memoization in heavy components and optimize data loading with caching and lazy loading of components when necessary.
#### 5. Responsive Design and Accessibility:
- **Motivation:** Although the design is adapted for large screens, mobile devices may offer a limited experience.
- **Next Step:** Improve responsive design, ensuring that the application is fully accessible and usable on smartphones and tablets.
