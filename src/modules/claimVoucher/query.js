const GETCLAIM = `
    select
        c.*
    from claimVoucher as c
    where case when $1 > 0 then c.id = $1 else true end
`;

const POSTCLAIM =`
insert into claimVoucher (name,PhoneNumber,Comment)
values ($1, $2, $3) returning *
`;

const PUTCLAIM = `
    with old_claimVoucher as (
        select
            id,
            name,
            PhoneNumber,
            Comment
        from claimVoucher
        where id = $1    
    ) update claimVoucher as c 
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
                end,
            Comment = 
                case 
                    when length($4) > 1 then $4
                    else o.Comment
                end 
    from old_claimVoucher as o   
    where c.id = $1
    returning c.*                 
`;

const DELETECLAIM =`
delete from claimVoucher
where id=$1 returning *
`;

export {
    GETCLAIM,
    POSTCLAIM,
    PUTCLAIM,
    DELETECLAIM
}