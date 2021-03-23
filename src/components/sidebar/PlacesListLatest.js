
import Pagination from 'next-pagination'
import nextPaginationStyle from '../../assets/scss/custom/components/pagination/theme.module.scss'
import _ from 'lodash'
// Components
import Card from '../places/Card';
const PlacesListLatest = ({ data = {} }) => {
  const total = data.total ? data.total : 0;
  const sizePerPageList = [10, 15, 20];
  return (
    <>
      <section className="container-fluid bg-light jumbotron jumbotron-fluid border-top">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 offset-lg-1">
              <div className="clearfix bg-white shadow-sm p-md-3 w-100">
                <h2 className="text-center">Địa điểm mới cập nhật</h2>
                {
                  _.map(data.data, (b, i) => (
                    <Card key={i} data={b} />
                  ))}
                <div className="clearfix w-100"></div>
                {total > 0 && <Pagination total={total} sizes={sizePerPageList} theme={nextPaginationStyle} />}
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};


export default PlacesListLatest;