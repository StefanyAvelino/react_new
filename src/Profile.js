export function Profile() {
    return (
            <img scr="https://www.acii.com.br/wp-content/uploads/2023/11/nume-capa-1-mulher.webp" alt="mulher"/>
    );
}

export default function Gallery() {
    return (
        <section>
            <h1>Mulheres</h1>
            <Profile/>
            <Profile/>
            <Profile/>
        </section>
    );
}