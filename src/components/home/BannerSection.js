import React from 'react';
import {withRouter} from 'next/router';
import {Container,Row,Col} from 'reactstrap'
import { Button } from 'primereact/button';
// Components
import {Logo} from '../common'
import SearchForm from '../form/SearchForm';
import CategoryList from './CategoryList';

function BannerSection({router, title}) {
  const scrollToRef = () => {
    document.querySelector(`#${val}`).scrollIntoView({behavior: "smooth"})
  }
  return (
    <>
      <div className="event-content w-100">
          <Container>
              <Row>
                  <Col xl="8" md="10" className="offset-xl-2 offset-md-1">
                    <Row>
                      <Col xl="10" md="12" className="offset-xl-1 offset-md-0">
                        <div className="center-text">
                            <div className="text-center w-100">
                                <div className="h1-margin">
                                  <Logo title={title}/>
                                </div>
                                <div className="center-content mt-4">
                                  <SearchForm />
                                  {/* <CategoryList /> */}
                                </div>
                            </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
              </Row>
          </Container>
      </div>

      {router.pathname !== '/elements/count-down' ? 
      <div className="set-bottom set-abs">
          <a className="center-content down" onClick={()=>scrollToRef('booking')} >
              <img alt="" className="scroll-down" src="/assets/images/event/image-down.png" />
          </a>
      </div>
      : ''}
    </>
  );
}

export default withRouter(BannerSection);