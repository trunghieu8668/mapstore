import Link from 'next/link';
import slugify from 'slugify'

const Card = ({ data }) => {
    const places = {...data}

    return (
      <article className="place-item mt-2 mb-4">
        <Link href={`/chi-tiet-dia-diem/${slugify(places.name, {lower: true})}.html`}>
            <a className="h6 font-weight-normal" title={places.name}>{places.name}</a>
        </Link>
        <address className="mb-0"><b>Địa chỉ:</b> {places.address}</address>
        <b>Điện thoại: </b> {places.phones} 
      </article>
    );
};

export default Card;
