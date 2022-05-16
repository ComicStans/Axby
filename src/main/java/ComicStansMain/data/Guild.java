package ComicStansMain.data;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Collection;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "axby_guilds")
public class Guild {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false, length = 100)
    private String name;

    @Column
    private String motto;

    @Column(name="date_created", nullable = false)
    private LocalDate dateCreated;

//Each Guild has one associated Board, to be created at the same time as the Guild.
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "guild_board_id", referencedColumnName = "id")
    @JsonIgnoreProperties("guild")
    private GuildBoard guildBoard;

//Each Guild can have many users as members; each user can belong to many Guilds.
    @ManyToMany(
            fetch = FetchType.LAZY,
            cascade = {CascadeType.DETACH, CascadeType.REFRESH},
            targetEntity = User.class)

    @JoinTable(
            name="axby_guild_user",
            joinColumns = {@JoinColumn(name = "guild_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name="user_id", nullable = false, updatable = false)},
            foreignKey = @ForeignKey(ConstraintMode.CONSTRAINT),
            inverseForeignKey = @ForeignKey(ConstraintMode.CONSTRAINT)
    )
    @JsonIgnoreProperties("users")
    private Collection<User> users;
}
