import Link from 'next/link';

const Card = ({ data }) => {
    const places = {...data}

    return (
      <article className="place-item mt-2 mb-4">
        <Link href={`/chi-tiet-dia-diem/${places._id}`}>
            <a className="h6 font-weight-normal" title={places.name}>{places.name}</a>
        </Link>
        <address className="mb-0"><b>Địa chỉ:</b> {places.address}</address>
        <b>Điện thoại: </b> {places.phones} 
      </article>
    );
};

export default Card;
