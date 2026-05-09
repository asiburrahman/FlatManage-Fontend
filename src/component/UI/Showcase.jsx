import React, { useState } from 'react';
import Button from './Button/Button';
import Input from './Input/Input';
import Card from './Card/Card';
import Badge from './Badge/Badge';
import Modal from './Modal/Modal';
import Table from './Table/Table';
import Dropdown from './Dropdown/Dropdown';
import { FaUser, FaSearch, FaEllipsisV, FaCheck, FaExclamationTriangle } from 'react-icons/fa';

const Showcase = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1 style={{ marginBottom: '2rem', color: '#1f2937' }}>UI Component Showcase</h1>

      {/* Buttons */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ marginBottom: '1.5rem', color: '#4b5563' }}>Buttons</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="primary" loading={isLoading} onClick={handleButtonClick}>
            {isLoading ? 'Loading...' : 'Click Me (Loading Demo)'}
          </Button>
          <Button variant="primary" icon={<FaUser />}>With Icon</Button>
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="lg">Large</Button>
        </div>
      </section>

      {/* Inputs */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ marginBottom: '1.5rem', color: '#4b5563' }}>Inputs</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <Input label="Email Address" placeholder="Enter your email" />
          <Input label="Password" type="password" placeholder="••••••••" error="Password is too short" />
          <Input label="Search" placeholder="Search apartments..." icon={<FaSearch />} />
        </div>
      </section>

      {/* Badges */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ marginBottom: '1.5rem', color: '#4b5563' }}>Badges</h2>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Badge variant="success">Available</Badge>
          <Badge variant="warning">Pending</Badge>
          <Badge variant="error">Sold Out</Badge>
          <Badge variant="info">New</Badge>
          <Badge variant="neutral">Draft</Badge>
          <Badge variant="success" outline>Outline Badge</Badge>
        </div>
      </section>

      {/* Cards */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ marginBottom: '1.5rem', color: '#4b5563' }}>Cards</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <Card>
            <Card.Header>
              <h3 style={{ margin: 0 }}>Standard Card</h3>
            </Card.Header>
            <Card.Body>
              <p>This is a reusable card component with header, body, and footer sections.</p>
            </Card.Body>
            <Card.Footer>
              <Button size="sm" variant="outline">View Details</Button>
            </Card.Footer>
          </Card>

          <Card variant="glass">
            <Card.Header>
              <h3 style={{ margin: 0 }}>Glass Variant</h3>
            </Card.Header>
            <Card.Body>
              <p>A beautiful glassmorphism effect for modern UI designs.</p>
            </Card.Body>
            <Card.Footer>
              <Button size="sm">Action</Button>
            </Card.Footer>
          </Card>
        </div>
      </section>

      {/* Table */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ marginBottom: '1.5rem', color: '#4b5563' }}>Tables</h2>
        <Table striped>
          <Table.Head>
            <Table.Row>
              <Table.HeaderCell>Apartment No</Table.HeaderCell>
              <Table.HeaderCell>Floor</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell>Action</Table.HeaderCell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>A-101</Table.Cell>
              <Table.Cell>1st</Table.Cell>
              <Table.Cell><Badge variant="success">Available</Badge></Table.Cell>
              <Table.Cell><Button size="sm" variant="outline">Book</Button></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>B-202</Table.Cell>
              <Table.Cell>2nd</Table.Cell>
              <Table.Cell><Badge variant="warning">Pending</Badge></Table.Cell>
              <Table.Cell><Button size="sm" variant="ghost">View</Button></Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </section>

      {/* Modal & Dropdown */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ marginBottom: '1.5rem', color: '#4b5563' }}>Modal & Dropdown</h2>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <div>
            <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
            <Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              title="Confirm Agreement"
              actions={
                <>
                  <Button variant="ghost" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                  <Button variant="primary" onClick={() => setIsModalOpen(false)}>Confirm</Button>
                </>
              }
            >
              <p>Are you sure you want to proceed with the apartment agreement for A-101? This action cannot be undone.</p>
            </Modal>
          </div>

          <Dropdown
            trigger={
              <Button variant="outline" icon={<FaEllipsisV />}>Options</Button>
            }
          >
            <Dropdown.Item onClick={() => console.log('Edit')}><FaCheck /> Edit Profile</Dropdown.Item>
            <Dropdown.Item onClick={() => console.log('Settings')}><FaExclamationTriangle /> Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => console.log('Logout')} className={styles.danger}>Logout</Dropdown.Item>
          </Dropdown>
        </div>
      </section>
    </div>
  );
};

export default Showcase;
