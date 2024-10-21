import { Tabs, Tab } from 'react-bootstrap';

const CategoryTabs = () => (
  <Tabs defaultActiveKey="musical" id="event-categories" className="mb-3">
    <Tab eventKey="musical" title="Musical Festival"></Tab>
    <Tab eventKey="book" title="Book Festival"></Tab>
    <Tab eventKey="dance" title="Dance Festival"></Tab>
  </Tabs>
);
export default CategoryTabs;