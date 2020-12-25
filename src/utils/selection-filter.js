export default function selectionFilter({ series, films }) {
    return {
        series: [
            {
                titile: 'Documentaries',
                 data: series.filter((item) => item.genre === 'documentaries'),         
            },
            {
                titile: 'Comedies',
                 data: series.filter((item) => item.genre === 'comedies'),         
            },
            {
                titile: 'Children',
                 data: series.filter((item) => item.genre === 'children'),         
            },
            {
                titile: 'Crime',
                 data: series.filter((item) => item.genre === 'crime'),         
            },
            {
                titile: 'Feel Good',
                 data: series.filter((item) => item.genre === 'feel-good'),         
            },
        ],
        films: [
            {
                title: 'Drama',
                data: films.filter((item) => item.genre === 'drama')
            },
            {
                title: 'Thriller',
                data: films.filter((item) => item.genre === 'thriller')
            },
            {
                title: 'Children',
                data: films.filter((item) => item.genre === 'children')
            },
            {
                title: 'Suspense',
                data: films.filter((item) => item.genre === 'suspense')
            },
            {
                title: 'Romance',
                data: films.filter((item) => item.genre === 'romance')
            },
        ],
        
    };
}