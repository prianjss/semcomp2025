'use client';
import Image from 'next/image';
import styles from './countdown.module.css';
import { AnimationEventHandler, useEffect, useState } from 'react';

function StaticCard({ position, digit, over=false }:{
    position: "upperCard" | "lowerCard" | "fullCard";
    digit: string;
    over?: boolean;
}){
    return (
        <div className={styles[position]} style={over ? 
            position=="fullCard"?
            {
                position: "absolute",
                top: 0
            }
            :{
                position: "absolute",
                top: "50%"
            } : {}}
        >
            <span>{digit}</span>
        </div>
    )
}

function AnimatedCard({ animation, digit, onAnimationEnd, onAnimationStart }:{
    animation: "fold" | "unfold";
    digit: string;
    onAnimationEnd?: AnimationEventHandler<HTMLDivElement>;
    onAnimationStart?: AnimationEventHandler<HTMLDivElement>;
}){
    return (
        <div className={[styles.flipCard, styles[animation]].join(" ")} onAnimationEnd={onAnimationEnd} onAnimationStart={onAnimationStart}>
            <span>{digit}</span>
        </div>
    )
}

interface SingleTimerProps {
    label: string;
    value: number;
    prev: number;
    shuffle: boolean;
    len?: number;
    useStatic?: boolean;
    styleOs: 'windows'|'linux';
}

function SingleTimer({
    label,
    value,
    prev,
    shuffle,
    len = 2,
    useStatic=false,
    styleOs
}: SingleTimerProps){
    const [overCard, setOverCard] = useState(true);
    const [overValue, setOverValue] = useState(value);
    const value1 = shuffle? prev : value;
    const value2 = shuffle? value : prev;

    useEffect(()=>{
        setOverValue(prev);
        setOverCard(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[shuffle])
    return(
        <div className={styles.timer}>
            <div className={[styles.timer_clock, styles[`timer_${styleOs}`]].join(' ')}>
                <StaticCard position='upperCard' digit={value.toString().padStart(len, "0")} />
                <StaticCard position='lowerCard' digit={prev.toString().padStart(len, "0")}/>
                <AnimatedCard 
                    animation={shuffle? 'fold' : 'unfold'} 
                    digit={value1.toString().padStart(len, "0")} 
                    onAnimationEnd={shuffle ? 
                        ()=>{
                            setOverValue(value)
                            setOverCard(true);
                        }
                        : undefined
                    }
                    onAnimationStart={!shuffle ?
                        ()=>{
                            setOverCard(false);
                        }
                        :undefined
                    }
                />
                <AnimatedCard 
                    animation={shuffle? 'unfold' : 'fold'} 
                    digit={value2.toString().padStart(len, "0")} 
                    onAnimationEnd={!shuffle ? 
                        ()=>{
                            setOverValue(value)
                            setOverCard(true);
                        }
                        : undefined
                    }
                    onAnimationStart={shuffle ?
                        ()=>{
                            setOverCard(false);
                        }
                        :undefined
                    }
                />
                {overCard && <StaticCard position='lowerCard' digit={overValue.toString().padStart(len, "0")} over={true}/>}
                {useStatic && <StaticCard position='fullCard' digit={value.toString().padStart(len,'0')} over={true}/>}
            </div>
            <p className={styles.timer_label}>{label}</p>
        </div>
    )
}

interface StaticTimerProps {
    label: string;
    value: number;
    len?: number;
}

function StaticTimer({
    label,
    value,
    len=2,

}: StaticTimerProps){
    return (
        <div className={styles.timer}>
            <div className={styles.timer_clock}>
                <StaticCard position='fullCard' digit={value.toString().padStart(len,'0')} over={true} />
            </div>
            <p className={styles.timer_label}>{label}</p>
        </div>
    )
}

const getRealValue = (max: number, prop: 'value'|'prev', unity: {
    value: number;
    prev: number;
    shuffle: boolean;
}) => unity[prop] >= 0 ? unity[prop] : (max + unity[prop])


export default function Countdown({osName}:{osName: string}){
    const [seconds, setSeconds] = useState({
        value: 0,
        prev: 0,
        shuffle: true,
    })

    const [minutes, setMinutes] = useState({
        value: 0,
        prev: 0,
        shuffle: true,
    })

    const [hours, setHours] = useState({
        value:0,
        prev:0,
        shuffle:true
    });

    const [days, setDays] = useState({
        value:0,
        prev:0,
        shuffle:true
    });

    const [months, setMonths] = useState({
        value:0,
        prev:0,
        shuffle:true
    });
    
    const updateTime = (first=false)=>{
        const time = (new Date(2025, 8, 9));
        const now = new Date(); 
        const s = time.getSeconds() - now.getSeconds();
        const min = time.getMinutes() - now.getMinutes() - +(s < 0);
        const h = time.getHours() - now.getHours() - +(min < 0);
        const d = time.getDate() - now.getDate() - +(h < 0);
        const m = time.getMonth() - now.getMonth() - +(d < 0);

        setSeconds(prev=>
            s !== prev.value || first?
            {
                value: s,
                prev: prev.value,
                shuffle: !prev.shuffle
            }
            : prev
        )

        setMinutes(prev=>
            min !== prev.value || first?
            {
                value: min,
                prev: prev.value,
                shuffle: !prev.shuffle
            }
            : prev
        )

        setHours(prev=>{
            if(h !== prev.value || first){
                return {
                    value: h,
                    prev: prev.value,
                    shuffle: !prev.shuffle
                };
            }
            return prev;
        })

        setDays(prev=>{
            if(d !== prev.value || first){
                return {
                    value: d,
                    prev: prev.value,
                    shuffle: !prev.shuffle
                };
            }
            return prev;
        })

        setMonths(prev=>{
            if(m !== prev.value || first){
                return {
                    value: m,
                    prev: prev.value,
                    shuffle: !prev.shuffle
                };
            }
            return prev;
        })
    }
    
    useEffect(()=>{
        const interval = setInterval(updateTime, 100);
        return ()=>clearInterval(interval);
    }, [hours, days, months, minutes, seconds])

    return (
        <section className={styles.container}>
            <Image className={styles.container_background} src="/assets/bola 2.png"  width={2047} height={1588} alt="" />
            <h1 className={styles.container_title}>COUNTDOWN SEMCOMP</h1>
            <p className={styles.container_desc}>Quanto tempo falta para o maior evento de computação e tecnologia de Salvador?</p>
            <div className={styles.container_countdown}>
                {osName==='windows' || osName==='linux'?
                (<>
                    <SingleTimer label='Meses' styleOs={osName} shuffle={months.shuffle} value={months.value} prev={months.prev} useStatic={getRealValue(30,'value',days)>1 && getRealValue(30,'value',days)<29} />
                    <SingleTimer label='Dias' styleOs={osName} shuffle={days.shuffle} value={getRealValue(30,'value',days)} prev={getRealValue(30,'prev',days)} useStatic={getRealValue(24,'value',hours)>1 && getRealValue(24,'value',hours)<23} />
                    <SingleTimer label='Horas' styleOs={osName} shuffle={hours.shuffle} value={getRealValue(30,'value', hours)} prev={getRealValue(24,'prev',hours)} useStatic={getRealValue(60,'value',minutes)>2 && getRealValue(60,'value',minutes)<59} />
                    <SingleTimer label='Minutos' styleOs={osName} shuffle={minutes.shuffle} value={getRealValue(60,'value',minutes)} prev={getRealValue(60,'prev',minutes)} useStatic={getRealValue(60,'value',seconds)>2 && getRealValue(60,'value',seconds)<59} />
                    <SingleTimer label='Segundos' styleOs={osName} shuffle={seconds.shuffle} value={getRealValue(60,'value',seconds)} prev={getRealValue(60,'prev',seconds)} />
                </>)
                :(<>
                    <StaticTimer label='Meses' value={months.value} />
                    <StaticTimer label='Dias' value={getRealValue(30,'value',days)} />
                    <StaticTimer label='Horas' value={getRealValue(30,'value', hours)} />
                    <StaticTimer label='Minutos' value={getRealValue(60,'value',minutes)} />
                    <StaticTimer label='Segundos' value={getRealValue(60,'value',seconds)} />
                </>)
                }
            </div>
        </section>
    )
}
