const React = require('react');
const Button = require('react-bootstrap/Button.js');

require('./../../style/user-profile/timeline.css');

const timelineData = [
    {
        text: 'Поменялся местами с @Aujiko',
        date: 'Sep 25 2019 12:45',
        category: {
            tag: 'Обмен мест',
            color: '#FFDB14'
        },
        link: {
            url: '#',
            text: 'Посмотреть очередь'
        }
    },
    {
        text: 'Комментарий от Николаева В.В',
        date: 'March 04 2019',
        category: {
            tag: 'Комментарий',
            color: '#e17b77'
        },
        link: {
            url: '#',
            text: 'Посмотреть'
        }
    },
    {
        text: 'Поменялся местами с @ifelseelif',
        date: 'March 04 2019',
        category: {
            tag: 'Обмен мест',
            color: '#FFDB14'
        },
        link: {
            url: '#',
            text: 'Посмотреть очередь'
        }
    },
    {
        text: 'Вступил в очередь "P3212 Письмак"',
        date: 'Jan 05 2019',
        category: {
            tag: 'Очередь',
            color: '#018f69'
        },
        link: {
            url:
                '#',
            text: 'Посмотреть очередь'
        }
    },
    {
        text: 'Создал очередь "P3212 Письмак"',
        date: 'Jan 05 2019',
        category: {
            tag: 'Очередь',
            color: '#018f69'
        },
        link: {
            url: '#',
            text: 'Посмотреть очередь'
        }
    }
];

const TimelineItem = ({data}) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag  w-100 text-center mb-1" style={{background: data.category.color}}>
                {data.category.tag}
            </span>
            <time>{data.date}</time>
            <p>{data.text}</p>
            {data.link && (
                <a
                    href={data.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {data.link.text}
                </a>
            )}
            <span className="circle"/>
        </div>
    </div>
);

const Timeline = () =>
    timelineData.length > 0 && (
        <div>
            <div className="timeline-container">
                {timelineData.map((data, idx) => (
                    <TimelineItem data={data} key={idx}/>
                ))}
            </div>
            <div className={"mx-auto text-center mt-2"}>
                <Button variant="outline-dark">Посмотреть предыдущие</Button>
            </div>

        </div>

    );

module.exports = Timeline;