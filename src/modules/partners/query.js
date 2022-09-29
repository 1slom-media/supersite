const GETPARTNERS = `
    select
        p.*
    from partners as p
    where case when $1 > 0 then p.id = $1 else true end
`;

const POSTPARTNERS =`
insert into partners (LogoImage)
values ($1) returning *
`;

const PUTPARTNERS = `
    with old_partners as (
        select
            id,
            LogoImage
        from partners
        where id = $1    
    ) update partners as p 
        set
            LogoImage = 
                case 
                    when length($2) > 1 then $2
                    else o.LogoImage
                end
    from old_partners as o   
    where p.id = $1
    returning p.*                 
`;

const DELETEPARTNERS =`
delete from partners
where id=$1 returning *
`;

export {
    GETPARTNERS,
    POSTPARTNERS,
    PUTPARTNERS,
    DELETEPARTNERS
}