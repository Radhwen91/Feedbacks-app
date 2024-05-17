class Feedback {
    photo: string;
    rating: number;
    description: string;
    cardStyle: string;
    destanceUserCard: string;
    constructor(photo:string, rating:number, description:string, cardStyle:string, destanceUserCard: string) {
        this.photo = photo;
        this.rating = rating;
        this.description = description;
        this.cardStyle = cardStyle;
        this.destanceUserCard = destanceUserCard;
    }
}

export default Feedback;