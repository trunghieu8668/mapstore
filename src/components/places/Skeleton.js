import { Row, Col } from "react-bootstrap";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
const SkeletonLoading = ({ count }) => {
  return (
    <>
      {[...Array(count || 1)].map((i) => (
        <div className="mt-2 mb-4 bg-white rounded p-4">
          <SkeletonTheme highlightColor="#eee" key={i} className="mb-4">
            <Row>
              <Col xs={12} lg={3}>
                <Skeleton count={1} height={130} />
              </Col>
              <Col xs={12} lg={9}>
                <Skeleton count={3} />
              </Col>
            </Row>
          </SkeletonTheme>
        </div>
      ))}
    </>
  );
};

export default SkeletonLoading;
