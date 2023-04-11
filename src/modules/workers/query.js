const GETWORKERS = `
    select
        w.*
    from Workers as w
    where case when $1 > 0 then w.id = $1 else true end
    order by w.id
`;

const POSTWORKERS =`
insert into Workers (imageAvatar, WorkerName, WorkerPosition,WorkerName_Uz,WorkerName_En,WorkerPosition_Uz,WorkerPosition_En)
values ($1, $2, $3,$4,$5,$6,$7) returning *
`;

const PUTWORKERS = `
    with old_Workers as (
        select
            id,
            imageAvatar,
            WorkerName, 
            WorkerPosition,
            WorkerName_Uz,
            WorkerName_En,
            WorkerPosition_Uz,
            WorkerPosition_En
        from Workers
        where id = $1    
    ) update Workers as w 
        set
            imageAvatar = 
                case 
                    when length($2) > 1 then $2
                    else o.imageAvatar
                end,
            WorkerName = 
                case 
                    when length($3) > 1 then $3
                else o.WorkerName
            end ,
            WorkerPosition = 
                case 
                    when length($4) > 1 then $4
                else o.WorkerPosition
            end,
            WorkerName_Uz = 
                case 
                    when length($5) > 1 then $5
                else o.WorkerName_Uz
            end,
            WorkerName_En = 
                case 
                    when length($6) > 1 then $6
                else o.WorkerName_En
            end,
            WorkerPosition_Uz = 
                case 
                    when length($7) > 1 then $7
                else o.WorkerPosition_Uz
            end,
            WorkerPosition_En = 
                case 
                    when length($8) > 1 then $8
                else o.WorkerPosition_En
            end
    from old_Workers as o   
    where w.id = $1
    returning w.*                 
`;

const DELETEWORKERS =`
delete from Workers
where id=$1 returning *
`;

export {
    GETWORKERS,
    POSTWORKERS,
    PUTWORKERS,
    DELETEWORKERS
}