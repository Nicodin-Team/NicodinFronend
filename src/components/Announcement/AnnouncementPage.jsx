import React from 'react';
import './AnnouncementPage.css';
import { getList } from './services/accounts';

const CompanyName = ({ name }) => <h3 className='job-company'>{name}</h3>;

const Place = ({ name }) => <h3 className='job-place'>{name}</h3>;

const JobName = ({ name }) => <h4 className='job-title'>{name}</h4>;

const Salary = ({ amount }) => <p><span className='salary'>${amount}</span>/month</p>;

const data = await getList();

console.log(data)

class AnnouncementPage extends React.Component {
  constructor(props) {
    super(props);
    { this.state = {
      hiringAds: [
        {
          id: 1,
          companyName: 'ABC Corp',
          jobName: 'Software Engineer',
          salary: 80000
        },
        {
          id: 2,
          companyName: 'XYZ Inc',
          jobName: 'Web Developer',
          salary: 70000
        },
        {
          id: 3,
          companyName: 'Digikala',
          jobName: 'Web Developer',
          salary: 20000,
          place: 'Tehran'
        },
        {
          id: 4,
          companyName: 'Amazon',
          jobName: 'IT specialist',
          salary: 60000
        },
        {
          id: 5,
          companyName: 'Amazon',
          jobName: 'AI engineer',
          salary: 80000
        },
        {
          id: 6,
          companyName: 'ABC Corp',
          jobName: 'Software Engineer',
          salary: 80000
        },
        {
          id: 7,
          companyName: 'XYZ Inc',
          jobName: 'Web Developer',
          salary: 70000
        },
        {
          id: 8,
          companyName: 'Digikala',
          jobName: 'Web Developer',
          salary: 20000,
          place: 'Tehran'
        },
        {
          id: 9,
          companyName: 'Amazon',
          jobName: 'IT specialist',
          salary: 60000
        },
        {
          id: 10,
          companyName: 'Amazon',
          jobName: 'AI engineer',
          salary: 80000
        },
      ],
      currentPage: 1,
      itemsPerPage: 6,
      searchQuery: ''
    
    };
    data;
     }
    data
  }

  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  handleSearchChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  render() {
    const { hiringAds, currentPage, itemsPerPage, searchQuery } = this.state;

    const filteredAds = hiringAds.filter(ad =>
      ad.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ad.jobName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredAds.slice(indexOfFirstItem, indexOfLastItem);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredAds.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    const maxVisibleButtons = 10;
    const indexOfLastPage = currentPage * itemsPerPage;
    const indexOfFirstPage = indexOfLastPage - itemsPerPage;
    const currentPages = pageNumbers.slice(indexOfFirstPage, indexOfLastPage);

    return (
      <div className='Announcement-page'>
      <header>
        <div class="navigation">
          <h1 class="title">Team up</h1>
          <a href="#" class="nav-item">Home</a>
          <a href="#" class="nav-item">Category</a>
          <a href="#" class="nav-item">About Us</a>
          <a href="#" class="nav-item">Contacts</a>
        </div>
        </header>
      <div className="announcement-container">
        <div className='search-container'>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={this.handleSearchChange}
            className='search-bar'
          />
          <button class="search-button">Search</button>
          </div>
        <div className="announcement-container">
          <h1 className="announcement-title">Latest Job Announcements</h1>
            <div className="announcement-list">
              {currentItems.map(ad => (
                <div key={ad.id} className="announcement-item">
                  <CompanyName name={ad.companyName} />
                  <Place name={ad.place} />
                  <JobName name={ad.jobName} />
                  <Salary amount={ad.salary} />
                  <button className="view-details-button">View Details</button>
              </div>
          ))}
        </div>
    </div>
    <ul className="pagination">
        {currentPage !== 1 && (
          <li>
            <button onClick={() => this.handlePageChange(currentPage - 1)}>Prev</button>
          </li>
        )}
        {currentPages.map((number) => (
          <li key={number}>
            <button onClick={() => this.handlePageChange(number)} className={number === currentPage ? 'active' : ''}>
              {number}
            </button>
          </li>
        ))}
        {currentPage !== pageNumbers.length && (
          <li>
            <button onClick={() => this.handlePageChange(currentPage + 1)}>Next</button>
          </li>
        )}
        {pageNumbers.length > maxVisibleButtons && (
          <li>
            <button onClick={() => this.handlePageChange(pageNumbers[pageNumbers.length - 1])}>Last</button>
          </li>
        )}
      </ul>
      </div>
      </div>
    );
  }
}

export default AnnouncementPage;
