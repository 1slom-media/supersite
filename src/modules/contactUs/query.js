const GETCONTACT = `
    select
        c.*
    from contactUs as c
    where case when $1 > 0 then c.id = $1 else true end
`;

const POSTCONTACT =`
insert into contactUs (name,PhoneNumber,Comment)
values ($1, $2, $3) returning *
`;

const PUTCONTACT = `
    with old_contactUs as (
        select
            id,
            name,
            PhoneNumber,
            Comment
        from contactUs
        where id = $1    
    ) update contactUs as c 
        set
            name = 
                case 
                    when length($2) > 1 then $2
                    else o.name
                end,
            PhoneNumber = 
                case 
                    when length($3) > 1 then $3
                else o.PhoneNumber
            end ,
            Comment = 
                case 
                    when length($4) > 1 then $4
                else o.Comment
            end 
    from old_contactUs as o   
    where c.id = $1
    returning c.*                 
`;

const DELETECONTACT =`
delete from contactUs
where id=$1 returning *
`;

export {
    GETCONTACT,
    POSTCONTACT,
    PUTCONTACT,
    DELETECONTACT
}