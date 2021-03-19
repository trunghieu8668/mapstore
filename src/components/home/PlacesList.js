
import Card from '../places/Card';
const PlacesList = ({ data = {} }) => {
  return (
    <>
      <section className="container-fluid bg-light jumbotron jumbotron-fluid border-top mt-5 pt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 offset-lg-1">
              <h2 className="text-center">Địa điểm mới cập nhật</h2>
              {data.data.length > 0 && data.data.map((b, i) => (
                <Card key={i} data={b} />
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  );
};


export default PlacesList;