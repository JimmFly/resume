import React from 'react';
import { Link } from 'react-router-dom';
import AdvancedFilterTable from './table';

/**
 * Table demo page component that displays the advanced filter table
 */
const TablePage: React.FC = () => {
  return (
    <div className='min-h-screen bg-white'>
      <div style={{ 
        padding: '20px', 
        textAlign: 'center', 
        borderBottom: '1px solid #f0f0f0',
        backgroundColor: '#fafafa'
      }}>
        <Link 
          to="/"
          style={{ 
            padding: '8px 16px', 
            backgroundColor: '#1890ff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px',
            textDecoration: 'none',
            display: 'inline-block'
          }}
        >
          返回简历页面
        </Link>
      </div>
      <AdvancedFilterTable />
    </div>
  );
};

export default TablePage;